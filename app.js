$('.ui.radio.checkbox').checkbox();

$('#submit').click(function () {
    let output = `
<div class="content">
    <div align="center">
        <span style="color:Transparent">aaa</span><br>
        <center>
            <p>##</p>
            <img style="height: 100px;" src="https://i.hizliresim.com/j7lwfrk.png" alt="Image">
            <p style="color: grey; font-size: 100%;">LOS SANTOS POLICE DEPARTMENT</p>
            <p style="color: black; font-size: 150%; font-weight: bold;">TUTUKLAMA RAPORU</p>
        </center>
        <table style="font-family: Arial; width: 100%;">
            <tr>
                <td valign="top" style="border-top:1px solid #111;border-right:1px solid #111;border-left:1px solid #111;border-bottom:1px solid #111;padding:3px;padding-left:6px;margin:1px;border-radius:2px"><strong class="text-strong">OLAY TARİHİ</strong></td>
                <td valign="top" style="border-top:1px solid #111;border-right:1px solid #111;border-left:1px solid #111;border-bottom:1px solid #111;padding:3px;padding-left:6px;margin:1px;border-radius:2px"><strong class="text-strong">KONUM</strong></td>            </tr>
            <tr>
                <td valign="top" style="border-top:1px solid #111;border-right:1px solid #111;border-left:1px solid #111;border-bottom:1px solid #111;padding:3px;padding-left:6px;margin:1px;border-radius:2px">${$('input[name="tarih"]').val()}</td>
                <td valign="top" style="border-top:1px solid #111;border-right:1px solid #111;border-left:1px solid #111;border-bottom:1px solid #111;padding:3px;padding-left:6px;margin:1px;border-radius:2px">${$('input[name="konum"]').val()}</td>
            </tr>
        </table>

        <table style="font-family: Arial; width: 100%;">
            <tr>
                <td valign="top" style="border-top:1px solid #111;border-right:1px solid #111;border-left:1px solid #111;border-bottom:1px solid #111;padding:3px;padding-left:6px;margin:1px;border-radius:2px"><strong class="text-strong">TUTUKLAMAYI YAPAN MEMUR</strong></td>
                <td valign="top" style="border-top:1px solid #111;border-right:1px solid #111;border-left:1px solid #111;border-bottom:1px solid #111;padding:3px;padding-left:6px;margin:1px;border-radius:2px"><strong class="text-strong">VARSA PARTNER ISMI</strong></td>
                <td valign="top" style="border-top:1px solid #111;border-right:1px solid #111;border-left:1px solid #111;border-bottom:1px solid #111;padding:3px;padding-left:6px;margin:1px;border-radius:2px"><strong class="text-strong">BİRİM KODU</strong></td>
            </tr>
            <tr>
                <td valign="top" style="border-top:1px solid #111;border-right:1px solid #111;border-left:1px solid #111;border-bottom:1px solid #111;padding:3px;padding-left:6px;margin:1px;border-radius:2px">${$('input[name="birincimemur"]').val()}</td>
                <td valign="top" style="border-top:1px solid #111;border-right:1px solid #111;border-left:1px solid #111;border-bottom:1px solid #111;padding:3px;padding-left:6px;margin:1px;border-radius:2px">${$('input[name="ikincimemur"]').val()}</td>
                <td valign="top" style="border-top:1px solid #111;border-right:1px solid #111;border-left:1px solid #111;border-bottom:1px solid #111;padding:3px;padding-left:6px;margin:1px;border-radius:2px">${$('input[name="birimkodu"]').val()}</td>
            </tr>
        </table>


        <table style="font-family: Arial; width: 100%;">
            <tr>
                <td valign="top" style="border-top:1px solid #111;border-right:1px solid #111;border-left:1px solid #111;border-bottom:1px solid #111;padding:3px;padding-left:6px;margin:1px;border-radius:2px"><strong class="text-strong">TUTUKLU ADI</strong></td>
                <td valign="top" style="border-top:1px solid #111;border-right:1px solid #111;border-left:1px solid #111;border-bottom:1px solid #111;padding:3px;padding-left:6px;margin:1px;border-radius:2px"><strong class="text-strong">TUTUKLANMA SEBEBI</strong></td>
                <td valign="top" style="border-top:1px solid #111;border-right:1px solid #111;border-left:1px solid #111;border-bottom:1px solid #111;padding:3px;padding-left:6px;margin:1px;border-radius:2px"><strong class="text-strong">HAPİS SÜRESİ</strong></td>
            </tr>
            <tr>
                <td valign="top" style="border-top:1px solid #111;border-right:1px solid #111;border-left:1px solid #111;border-bottom:1px solid #111;padding:3px;padding-left:6px;margin:1px;border-radius:2px">${$('input[name="tutuklanan"]').val()} </td>
                <td valign="top" style="border-top:1px solid #111;border-right:1px solid #111;border-left:1px solid #111;border-bottom:1px solid #111;padding:3px;padding-left:6px;margin:1px;border-radius:2px">${$('input[name="tutuklanmasebebi"]').val()}</td>
                <td valign="top" style="border-top:1px solid #111;border-right:1px solid #111;border-left:1px solid #111;border-bottom:1px solid #111;padding:3px;padding-left:6px;margin:1px;border-radius:2px">${$('input[name="hapissuresi"]').val()}</td>
            </tr>
        </table>

        <table style="font-family: Arial; width: 100%;">
            <tr>
                <td valign="top" style="border-top:1px solid #111;border-right:1px solid #111;border-left:1px solid #111;border-bottom:1px solid #111;padding:3px;padding-left:6px;margin:1px;border-radius:2px"><strong class="text-strong">OLAYIN AÇIKLAMASI</strong></td>
            </tr>
            <tr>
                <td valign="top" style="border-top:1px solid #111;border-right:1px solid #111;border-left:1px solid #111;border-bottom:1px solid #111;padding:3px;padding-left:6px;margin:1px;border-radius:2px">${$('textarea[name="rapor"]').val()}</td>
            </tr>
        </table>

        <p>##</p>
    </div>
</body>
</html>
    `;

    $('#output').html(output);

});
