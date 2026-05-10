Write-Host "Turkce konusma paketi yukleniyor..."
Write-Host ""

try {
    Add-WindowsCapability -Online -Name "Language.Speech~~~tr-TR~0.0.1.0"
    Write-Host "Basarili! Turkce konusma paketi yuklendi."
}
catch {
    Write-Host "Speech paketi bulunamadi, TextToSpeech deneniyor..."
    try {
        Add-WindowsCapability -Online -Name "Language.TextToSpeech~~~tr-TR~0.0.1.0"
        Write-Host "Basarili! Turkce TTS paketi yuklendi."
    }
    catch {
        Write-Host "Otomatik yukleme basarisiz oldu."
        Write-Host ""
        Write-Host "MANUEL YUKLEME:"
        Write-Host "1. Windows Ayarlari > Zaman ve Dil > Dil ve bolge"
        Write-Host "2. Tercih edilen dil ekle > Turkce > Konusma secenegini isaretleyin"
        Write-Host "3. Bilgisayari yeniden baslatin"
    }
}

Write-Host ""
Write-Host "Mevcut sesler:"
$s = New-Object -ComObject SAPI.SpVoice
$v = $s.GetVoices()
for ($i = 0; $i -lt $v.Count; $i++) {
    Write-Host "  - $($v.Item($i).GetDescription())"
}
