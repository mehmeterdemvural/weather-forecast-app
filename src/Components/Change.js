import { UseWeather } from "../Contexts/WeatherContext";

function Change() {
  const { setCountry } = UseWeather();

  return (
    <div className="container text-center mt-4">
      <div className="row justify-content-center">
        <form>
          <select
            className="form-control"
            onChange={(e) => {
              setCountry(e.target.value);
              e.target.value = "Change Country";
            }}
          >
            <option>Change Country</option>
            <option>ADANA</option>
            <option>ADIYAMAN</option>
            <option>AFYONKARAHİSAR</option>
            <option>AĞRI</option>
            <option>AKSARAY</option>
            <option>AMASYA</option>
            <option>ANKARA</option>
            <option>ANTALYA</option>
            <option>ARDAHAN</option>
            <option>ARTVİN</option>
            <option>AYDIN</option>
            <option>BALIKESİR</option>
            <option>BARTIN</option>
            <option>BATMAN</option>
            <option>BAYBURT</option>
            <option>BİLECİK</option>
            <option>BİNGÖL</option>
            <option>BİTLİS</option>
            <option>BOLU</option>
            <option>BURDUR</option>
            <option>BURSA</option>
            <option>ÇANAKKALE</option>
            <option>ÇANKIRI</option>
            <option>ÇORUM</option>
            <option>DENİZLİ</option>
            <option>DİYARBAKIR</option>
            <option>DÜZCE</option>
            <option>EDİRNE</option>
            <option>ELAZIĞ</option>
            <option>ERZİNCAN</option>
            <option>ERZURUM</option>
            <option>ESKİŞEHİR</option>
            <option>GAZİANTEP</option>
            <option>GİRESUN</option>
            <option>GÜMÜŞHANE</option>
            <option>HAKKARİ</option>
            <option>HATAY</option>
            <option>IĞDIR</option>
            <option>ISPARTA</option>
            <option>İSTANBUL</option>
            <option>İZMİR</option>
            <option>KAHRAMANMARAŞ</option>
            <option>KARABÜK</option>
            <option>KARAMAN</option>
            <option>KARS</option>
            <option>KASTAMONU</option>
            <option>KAYSERİ</option>
            <option>KIRIKKALE</option>
            <option>KIRKLARELİ</option>
            <option>KIRŞEHİR</option>
            <option>KİLİS</option>
            <option>KOCAELİ</option>
            <option>KONYA</option>
            <option>KÜTAHYA</option>
            <option>MALATYA</option>
            <option>MANİSA</option>
            <option>MARDİN</option>
            <option>MERSİN</option>
            <option>MUĞLA</option>
            <option>MUŞ</option>
            <option>NEVŞEHİR</option>
            <option>NİĞDE</option>
            <option>ORDU</option>
            <option>OSMANİYE</option>
            <option>RİZE</option>
            <option>SAKARYA</option>
            <option>SAMSUN</option>
            <option>SİİRT</option>
            <option>SİNOP</option>
            <option>SİVAS</option>
            <option>ŞANLIURFA</option>
            <option>ŞIRNAK</option>
            <option>TEKİRDAĞ</option>
            <option>TOKAT</option>
            <option>TRABZON</option>
            <option>TUNCELİ</option>
            <option>UŞAK</option>
            <option>VAN</option>
            <option>YALOVA</option>
            <option>YOZGAT</option>
            <option>ZONGULDAK</option>
          </select>
        </form>
      </div>
    </div>
  );
}

export default Change;
