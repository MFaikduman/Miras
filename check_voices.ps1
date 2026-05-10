$synth = New-Object -ComObject SAPI.SpVoice
$voices = $synth.GetVoices()
Write-Host "=== YÜKLÜ SESLER ==="
for ($i = 0; $i -lt $voices.Count; $i++) {
    Write-Host $voices.Item($i).GetDescription()
}
