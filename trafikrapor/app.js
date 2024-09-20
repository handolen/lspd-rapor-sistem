$('.ui.radio.checkbox').checkbox();

$('#submit').click(function () {
    let output = `
<div style="background-color: #; border: 1px solid black; margin-bottom: 8px; padding: 5px;">
    <div align="center">
        <a href="https://i.imgur.com/LxSCnVJ.png" class="fancybox" data-fancybox="topic" title="">
            <img src="https://i.imgur.com/LxSCnVJ.png" alt="" width="900" height="200">
        </a>
    </div>
    <div style="background-color: #; border: 1px solid black; margin-bottom: 8px; padding: 5px;">
        <div style="text-align: left;">
            <div style="background-color: gray; border: 1px solid black; margin-bottom: 8px; padding: 5px;">
                <span style="color: white;">ACCIDENT REPORT</span>
            </div>

            <span style="color: black; font-size: 9pt;"><strong>1.1</strong> - TARİH VE LOKASYON BİLGİLERİ</span>
            <ul>
                <li><strong>1.1.1 - Trafik Kazasının Yaşandığı Tarih ve Saat:</strong> ${$('input[name="kaza_tarih_saat"]').val()}</li>
                <li><strong>1.1.2 - Trafik Kazasının Yaşandığı Bölge ve Coğrafik Konum:</strong> ${$('input[name="kaza_konum"]').val()}</li>
            </ul>

            <span style="color: black; font-size: 9pt;"><strong>1.2</strong> - TUTANAK TUTAN EKİP VE PERSONEL BİLGİLERİ</span>
            <ul>
                <li><strong>1.2.1 - Trafik Kazasını Raporlayan Ekip Kodu:</strong> ${$('input[name="raporlayan_ekip_kodu"]').val()}</li>
                <li><strong>1.2.2 - Raporlamayı Yapan Personelin Adı, Soyadı ve Rozet Numarası:</strong> ${$('input[name="raporlayan_personel"]').val()}</li>
                <li><strong>1.2.3 - Raporlamayı Yapan Personelin Trafik Büro Rütbesi:</strong> ${$('input[name="raporlayan_rutbe"]').val()}</li>
                <li><strong>1.2.4 - Raporlamayı Yapan Personelin İmzası:</strong> ${$('input[name="raporlayan_imza"]').val()}</li>
            </ul>

            <span style="color: black; font-size: 9pt;"><strong>1.3</strong> - EKİP VE SÜRÜCÜ PERSONEL BİLGİLERİ</span>
            <ul>
                <li><strong>1.3.1 - Trafik Kazasına Karışan Ekip Kodu:</strong> ${$('input[name="karisan_ekip_kodu"]').val()}</li>
                <li><strong>1.3.2 - Sürücü Personelin Adı, Soyadı ve Rozet Numarası:</strong> ${$('input[name="surucu_personel"]').val()}</li>
                <li><strong>1.3.3 - Sürücü Personelin İfadesi:</strong> ${$('textarea[name="surucu_personel_ifade"]').val()}</li>
                <li><strong>1.3.4 - Sürücü Personelin İmzası:</strong> ${$('input[name="surucu_personel_imza"]').val()}</li>
            </ul>

            <span style="color: black; font-size: 9pt;"><strong>1.4</strong> - SÜRÜCÜ VATANDAŞ BİLGİLERİ</span>
            <ul>
                <li><strong>1.4.1 - Sürücü Vatandaşın Adı, Soyadı ve Telefon Numarası:</strong> ${$('input[name="surucu_vatandas"]').val()}</li>
                <li><strong>1.4.2 - Sürücü Vatandaşın İfadesi:</strong> ${$('textarea[name="surucu_vatandas_ifade"]').val()}</li>
                <li><strong>1.4.3 - Sürücü Vatandaşın İmzası:</strong> ${$('input[name="surucu_vatandas_imza"]').val()}</li>
            </ul>

            <span style="color: black; font-size: 9pt;"><strong>1.5</strong> - HASAR KAYIT BİLGİLERİ</span>
            <ul>
                <li><strong>1.5.1 - Polis Aracındaki Hasarların Bilgisi:</strong> ${$('textarea[name="polis_araci_hasar"]').val()}</li>
                <li><strong>1.5.1.1 - Polis Aracı Görüntüsü:</strong> ${$('input[name="polis_araci_goruntu"]').val()}</li>
                <li><strong>1.5.2 - Sivil Araçtaki Hasarların Bilgisi:</strong> ${$('textarea[name="sivil_arac_hasar"]').val()}</li>
                <li><strong>1.5.2.1 - Sivil Aracın Görüntüsü:</strong> ${$('input[name="sivil_arac_goruntu"]').val()}</li>
                <li><strong>1.5.3 - Kazanın Bodycam & Dashcam Görüntüsü (Varsa):</strong> ${$('input[name="kaza_goruntu"]').val()}</li>
            </ul>

            <span style="color: black; font-size: 9pt;"><strong>1.6</strong> - UYGULANAN İŞLEM</span>
            <ul>
                <li><strong>1.6.1 - Hatalı bulunan taraf:</strong> ${$('input[name="hatali_taraf"]').val()}</li>
                <li><strong>1.6.2 - Uygulanan İşlem:</strong> ${$('textarea[name="uygulanan_islem"]').val()}</li>
            </ul>

            <div style="background-color: gray; border: 1px solid black; margin-bottom: 8px; padding: 5px;">
                <span style="color: white;">ACCIDENT REPORT</span>
            </div>
        </div>
    </div>
</div>
##
    `;

    $('#output').html(output);
});