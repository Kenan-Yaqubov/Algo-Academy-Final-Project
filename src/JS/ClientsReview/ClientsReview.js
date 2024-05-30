import Client from "./Client";
import "../../css/ClientsReview.css";

import bgImg1 from"../../imgs/clientImg1.png";
import bgImg2 from"../../imgs/clientImg2.png";
import bgImg3 from"../../imgs/clientImg3.png";

import avatar1 from "../../imgs/clientAvatar1.png"
import avatar2 from "../../imgs/clientAvatar2.png"
import avatar3 from "../../imgs/clientAvatar3.png"

function ClientsReview() {
  return (
    <div className="main-CR-Container">
      <h2>TESTIMONIALS</h2>
      <h1>Our Client Reviews</h1>
      <div className="CR_container">
        <Client
          bgImg={bgImg1}
          avatar={avatar1}
          name="Bang Upin"
          article="Pedagang Asongan"
          text="“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“"
        />
        <Client
          bgImg={bgImg2}
          avatar={avatar2}
          name="Ibuk Sukijan"
          article="Ibu Rumah Tangga"
          text="“Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah“"
        />
        <Client
          bgImg={bgImg3}
          avatar={avatar3}
          name="Mpok Ina"
          article="Karyawan Swasta"
          text="“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“"
        />
      </div>
    </div>
  );
}

export default ClientsReview;
