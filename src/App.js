import './App.scss';
import Card from './components/Card/Card';

import sai_cach_yeu from './assets/images/sai_cach_yeu.jpg';
import em_nao_co_toi from './assets/images/em_nao_co_toi.jpg';
import co_don_danh_cho_ai from './assets/images/co_don_danh_cho_ai.jpg';
import co_hen_voi_thanh_xuan from './assets/images/co_hen_voi_thanh_xuan.jfif';
import phai_giu_em_the_nao from './assets/images/phai_giu_em_the_nao.jpg';

import butter from './assets/images/butter.png';
import good_4_u from './assets/images/good_4_u.png';
import levitating from './assets/images/levitating.png';
import stay from './assets/images/stay.jfif';
import kiss_me_more from './assets/images/kiss_me_more.jpg';

import permission_to_dance from './assets/images/permission_to_dance.png';
import nakka from './assets/images/nakka.jpg';
import gone from './assets/images/gone.jpg';
import lovesick_girls from './assets/images/lovesick_girls.jpg';

function App() {
  const classifyArray = [
    {
      nameKind: 'V-Pop',
      song: [
        { src: sai_cach_yeu, name: 'Sai Cách Yêu', single: 'Lê Bảo Bình', vip: false },
        { src: em_nao_co_toi, name: 'Em Nào Có Tội', single: 'Thương Võ, ACV', vip: false },
        { src: co_don_danh_cho_ai, name: 'Cô Đơn Dành Cho Ai', single: 'Lee Ken, Nai', vip: false },
        { src: co_hen_voi_thanh_xuan, name: 'Có Hẹn Với Thanh Xuân', single: 'MONSTAR', vip: false },
        { src: phai_giu_em_the_nao, name: 'Phải Giữ Em Thế Nào', single: 'Mr. Siro', vip: false },
      ]
    }, {
      nameKind: 'UK-UK',
      song: [
        { src: butter, name: 'Butter', single: 'BTS', vip: false },
        { src: good_4_u, name: 'Good 4 U', single: 'Olivia Rodrigo', vip: true },
        { src: levitating, name: 'Levitating (feat. DaBaby)', single: 'Dua Lipa, DaBaby', vip: true },
        { src: stay, name: 'STAY', single: 'The Kid LAROI, Justin Bieber', vip: false },
        { src: kiss_me_more, name: 'Kiss Me More', single: 'Doja Cat, SZA', vip: false },
      ]
    }, {
      nameKind: 'K-Pop',
      song: [
        { src: permission_to_dance, name: 'Permission to Dance', single: 'BTS', vip: false },
        { src: nakka, name: 'NAKKA (with IU)', single: 'AKMU, IU', vip: false },
        { src: gone, name: 'Gone', single: 'ROSÉ', vip: false },
        { src: butter, name: 'Butter', single: 'BTS', vip: false },
        { src: lovesick_girls, name: 'Lovesick Girls', single: 'BLACKPINK', vip: false },
      ]
    }
  ];
  
  return (
    <div className="App">
      <h1 className="App__title">Bảng xếp hạng tuần</h1>
      <div className="rating">

        {/* Card */}
        {classifyArray.map((item, index) => {
          return <Card kind={item.nameKind} song={item.song} key={index}></Card>
        })}


      </div>
    </div>
  );
}

export default App;
