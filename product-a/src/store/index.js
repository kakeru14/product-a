import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
      {
        id: 1,
        imagePath: "1.jpg",
        name: "ビニールプール",
        price: 1490,
        description: `製品サイズ:(約)幅157×奥行157×高さ122cm
        材質:塩化ビニル樹脂(非フタル酸系可塑剤使用)
        水量目安:高さ22cmまで入れて295L
        付属品:修理用パッチ
        対象年齢:2歳以上
        原産国:中国
        INTEX社製のサンシェード付プール。
        高さのある壁で安定します。
        サンシェードは取り外し可能です。
        プール底に排水口付き。
        修理用パッチ付。
        ご注意:子供は必ず、監視者のもとで遊ばせてください。
        レンタル等による貸出、オークション等による販売や中古販売、
        及び譲渡によって発生した故障・破損・損害・事故などにつきましては
        一切責任を負いかねますので予めご了承ください。`,
        status: 0,
        quantity: 0,
      },
      {
        id: 2,
        imagePath: "2.jpg",
        name: "ラジコンバギー ボブキャットEX",
        price: 1490,
        description: `防塵防水仕様1/20スケールラジコンバギー。
        生活防水だから水たまりでの走行可能、汚れたら水かけ洗いもできる。
        前後サスペンション搭載で悪路を走破。
        登坂力35度、ハイスピード15キロ。
        デフギア搭載でクイックなコーナーリング。
        アウトドアでもガンガン走るラジコンバギー。
        <本体サイズ>H11.5×W16×D27.5cm`,
        status: 0,
        quantity: 0,
      },
      {
        id: 3,
        imagePath: "3.jpg",
        name: "シルバニアファミリーSylvanian Families(赤い屋根の大きなお家",
        price: 1490,
        description: `お家は90度や180度に開いたり、閉じたりして遊ぶことができます。
        お家を閉じると、どこから見てもきれいなお家の形になり、窓からこぼれるお家のあかりがとてもきれいです。
        ３階のお部屋「えんとつのお部屋」と「屋根ユニット」が取り外せるようになっています。
        これらのお部屋を組みかえることで、３階建てのお家としても遊ぶことができます。`,
        status: 0,
        quantity: 0,
      },
      {
        id: 4,
        imagePath: "4.jpg",
        name: "ハピネスチャージプリキュア! キュアライン",
        price: 1900,
        description: `ハピネスチャージプリキュア!が使用するスマホ「キュアライン」が登場!!
        流行のスタンプメールやTV電話でプリキュアたちとコミュニケーション!
        メールがきたら選択をして返信!スタンプも送れる!メールは800パターン以上!
        スタンプは100種類以上!
        メール&TV電話で仲良し度を上げてプロフをゲット!
        さらに、歴代プリキュアたちともスタンプメールができちゃう!
        また、遊んで学べる知育アプリやゲーム、実用アプリがいっぱい!
        タッチペンで文字や数字の書き方を学んだり、遊びながら学べる知育アプリが盛りだくさん。
        さらに!専用ホームページからデータをダウンロードしてゲームやキャラクターを追加できる! 
        (ゲーム、メールできるキャラクター、スタンプ)
        使用電池:単4×4 (別売) 
       【商品内容】キュアライン本体1個、タッチペン1個`,
        status: 0,
        quantity: 0,
      },
      {
        id: 5,
        imagePath: "5.jpg",
        name: "こえだちゃん キキ & ララ 月のおうち",
        price: 1900,
        description: `過去大ヒットした『キキ＆ララ月のおうち』の復刻版です。
        家具や色味など、現代バージョンにアレンジし、パワーアップして登場です。`,
        status: 0,
        quantity: 0,
      },
      {
        id: 6,
        imagePath: "6.jpg",
        name: "キラキラ プリキュアアラモード まぜまぜ変身!スイーツパクトDX",
        price: 2700,
        description: `キラキラ プリキュアアラモードより、まぜまぜ変身!スイーツパクトDXが登場!
        プリキュア5人全員の変身&攻撃あそびが楽しめるオールインワンセット!
        スイーツづくりみたいな「まぜまぜアクション」で5人のなりきりあそびができる!!
        
        セット内容:スイーツパクト本体 1個 まぜまぜスティック 1本 アニマルスイーツ 
        うさぎショートケーキ1個 リスプリン1個 ライオンアイス1個 キャットマカロン1個 
        ドッグチョコレート1個 ボールチェーン1個 使用電池:単4×2(別売)
        
         ※デビューキャンペーンの先着購入特典、アニマルスイーツ「ペコリンムースケーキ」は付属しません。`,
        status: 0,
        quantity: 0,
      },
      {
        id: 7,
        imagePath: "7.jpg",
        name: "アンパンマンタウン ようこそ！たのしいパンこうじょうハウス",
        price: 2570,
        description: `遊びやすい2面のドールハウスがラインナップ！
        「アンパンマンタウン ようこそ！たのしいパンこうじょうハウス」は、
        大きさ約25センチサイズのパン工場です。
        
        3階建ての建物はお部屋スペース側、キッチン、お風呂、リビング、
        ベッド、はしご、階段、ブランコ、ポスト、野菜やお花の抜きさしや
        アンパンマン号あそびが楽しめ、もう片面はパン工場でパン転がしあそび、
        かまど遊び、パンこね遊びができる遊びたくさんのドールハウスです。
        
        アンパンマンとメロンパンナちゃんのドールフィギュアも付属で、
        ハウス各所にある星型の突起に乗せやすい作りになっています。
        アンパンマンの世界観を表現した本商品で、楽しくドール遊びをしちゃおう！`,
        status: 0,
        quantity: 0,
      },
      {
        id: 8,
        imagePath: "8.jpg",
        name: "人生ゲーム（2016年ver.）",
        price: 2160,
        description: `人生ゲームシリーズのフラッグシップモデルが8年ぶりにリニューアル!! 
        4つの追加エリアを組み合わせることで、色んなテイストの人生ゲームが楽しめます!組み合わせパターンは全16種。 
        【セット内容】 
        億万長者ステージ(1),追加用ステージ(仮)(4), 山(ゲーム版に貼り付いているもの以外)(1),
        家(ゲーム版に貼りついているもの以外)(4), ビル群(1),追加ステージ用橋(4),橋(1),
        自動車ゴマ(6色 各1個)(6),旗(6色 各1本)(6), 人物ピン(水色36本、ピンク36本))(72),
        職業カード(A4サイズ)(1), お宝カード(A4サイズ)(1),保険証券(火災保険、生命保険、自動車保険)(24),
        株券(8),お札一式(1)`,
        status: 0,
        quantity: 0,
      },
      {
        id: 9,
        imagePath: "9.jpg",
        name: "野球盤 3Dエース",
        price: 2700,
        description: `野球盤史上初！｢3Dピッチング機能｣を搭載し、ピッチャーの投球が本物のように飛びます！ 
        オーバースローとアンダースローで投げ分けて、ホームランバッターに挑め！ めざせ！完・全・試・合！ 
        [セット内容] 
        野球盤本体1、電光掲示板1、ホームランフェンス（直線・曲線）各2、外周フェンス（照明パーツ含む）2、
         グローブポケット4、バッターウィンドウ1、ボール6、バッター人形2、ピッチャー人形1、ランナー人形3、 
         フィールダー人形7、カウントピン3、シール1、バット用ゴム3、取扱説明書1`,
        status: 0,
        quantity: 0,
      },
      {
        id: 10,
        imagePath: "10.jpg",
        name: "ベイブレードバースト　B-86 スターター",
        price: 2160,
        description: `ギミック付きのレイヤー搭載したディフェンスタイプの新型ベイブレード！ 
        ※ライトランチャーLR付属 
        
        ＜セット内容＞
         レイヤー(1),ディスク(1),ドライバー(1),ランチャー(1),ワインダー(1),取説(1),シール(1)`,
        status: 0,
        quantity: 0,
      },
      {
        id: 11,
        imagePath: "11.jpg",
        name:
          "仮面ライダーエグゼイド　ダブル装填　DXガシャコン キースラッシャー",
        price: 2700,
        description: `ダブルアクションゲーマー専用武器。3つのモードにチェンジ！
        キーを入力して攻撃！ 別売りのライダーガシャットをセットして必殺技発動！ 
        ＜セット内容＞本体×1`,
        status: 0,
        quantity: 0,
      },
      {
        id: 12,
        imagePath: "12.jpg",
        name: "トミカハイパーシリーズ ドライブヘッド",
        price: 2160,
        description: `石野ジン・石野ミコトの双子が操縦する機動救急警察ハイパーレスキューが開発した警察機能に特化したドライブヘッド。
        カーフォームとウォーカービークルフォームの変形が可能！ 
        ＜セット内容＞ボディ(1),左腕(1),右腕(1),左脚(1),右脚(1),
        インジェクトガン(1),インジェクトガンステイ(1),★ホープドライブヘッド１号(1),
        ★ホープドライブヘッド2号(1),ラベル(1),取扱説明書(1) ※「★」マークは新規金型 
        ＜主な材質＞ABS`,
        status: 0,
        quantity: 0,
      },
      {
        id: 13,
        imagePath: "13.jpg",
        name: "ミニ四駆スターターパック　MAパワータイプ（ブラストアロー",
        price: 2160,
        description: `ブラストアローのキットと、レース参加に欠かせない
        基本的なパーツやドライバーなどの工具をワンセットにしたスペシャル仕様です。 
        完成時の全長155mm。全幅104mm。全高41mm。 
        ＜セット内容＞
        本体、組立説明書、モーター 
        ＜主な材質＞
        PS`,
        status: 0,
        quantity: 0,
      },
      {
        id: 14,
        imagePath: "14.jpg",
        name: "ミニ四駆スターターパック　MAパワータイプ（ブラストアロー）",
        price: 2980,
        description: `ミニ四駆に熊本県のゆるキャラ、
        『くまモン』が搭乗！ 彼の選んだミニ四駆は、アスチュートオープントップ（スーパーIIシャーシ、モーター付き）でした！
        ※くまモン人形は組み立て塗装済みです。くまもとサプライズ・くまモンは熊本県の登録商標です。`,
        status: 0,
        quantity: 0,
      },
      {
        id: 15,
        imagePath: "15.jpg",
        name: "機動戦士ガンダムZZ ダブルゼータガンダム",
        price: 2440,
        description: `待望のMG ダブルゼータガンダム Ver.Kaが遂に登場!! 各部の広い可動域とコア・ブロック・システムの搭載、各形態への変形を実現!`,
        status: 0,
        quantity: 0,
      },
      {
        id: 16,
        imagePath: "16.jpg",
        name: "こえだちゃんと木のおうち",
        price: 2700,
        description: `今度のこえだちゃんは「まほうのカギ」で動きだす！！ カギでうごくよシリーズの「木のおうち」新登場！ 
        1.鍵を左にまわすと、素敵な音とともに木のおうちがオープン。 
        2.鍵を右にまわすと、エレベーターが自動で上下できるモードになります。
        3.玄関におしゃべりスイッチがあり、キャラクターの声やこえだちゃんのテーマ曲が流れます。
        4.屋根の一番上についているお花のクルクルゴーランドは、エレベーターの上下と連動して大きく回転します。 
        5.その他、クルクル回るリスの切り株、ブランコ、屋上のくぼみなど、子どもの想像力で遊べるポイントが増えました。`,
        status: 0,
        quantity: 0,
      },
      {
        id: 17,
        imagePath: "17.jpg",
        name: "キラペットドーム <アクセパーティー>'",
        price: 2440,
        description: `キラキラのスノードームが作れるおもちゃです! 人形とベースの組み合わせを選んで、
        デコチャームを入れ、ドームに水とラメタブレットを入れて、封入! ! 
        スノードームをデザインするデザイナーの気分が味わえます。
         出来上がったキラドームは付属のアクセパーツに取りつけて、身に着けることが出来ます。 
         キラドームとアクセパーツは簡単に付け替えられるので、気分に合わせて、付け替えて遊ぶことが出来ます。
          他のキラペットドームシリーズに同梱しているディスプレイパーツに取り付けて遊べます。 
          【セット内容】 
          ドームメーカー、水ボトル、ドーム×8、人形×8、ベースプレート×8、ラメタブレット×10、デコチャーム×24、
          指輪×2、ネックレス×2、ブレスレット×2、ディスプレー(ティーカップ、ティーポット)、取扱説明書`,
        status: 0,
        quantity: 0,
      },
      {
        id: 18,
        imagePath: "18.jpg",
        name: "おはじきシール ゆめかわDX",
        price: 2700,
        description: `ゆめかわ系のおはじきシールが150個作ることができます。
        カードやお手紙などに貼ったりお友達と交換することで遊びが広がります。`,
        status: 0,
        quantity: 0,
      },
    ],
    login_user: null,
    selectedItems: [],
    inCart: null,
  },
  getters: {
    getItemById: (state) => (id) => state.items.find((item) => item.id === id),
    userName: (state) => (state.login_user ? state.login_user.displayName : ""),

    uid: (state) => (state.login_user ? state.login_user.uid : null),
    getkoById: (state) => (id) => state.inCart.find((ko) => ko.id === id),
    cart(state) {
      const cart = state.items.filter((element) => {
        return element.status == 1;
      });
      return cart;
    },
  },
  mutations: {
    setLoginUser(state, user) {
      state.login_user = user;
    },
    deleteLoginUser(state) {
      state.login_user = null;
    },

    inCart(state, { id, ko }) {
      // console.log(el.id);
      //console.log(selected)
      state.items.forEach((el) => {
        // console.log(el.quantity);
        if (el.id == id) {
          el.status = 1;
          el.quantity = el.quantity + ko;
          console.log("実行後");
        }
        //console.log(el.status)
      });
      //found.status = 1
    },
    addCart(state, { id, ko }) {
      console.log("確認用");
      const index = state.items.findIndex((item) => {
        return item.id == id;
      });
      state.items[index].status = 1;
      state.items[index].quantity += ko;
    },
    // removeCart(state, { items }) {
    //   const index = el.id.findIndex((el) => el.id == id);
    //   this.el.id.splice(index, 1);
    // },
    removeCart(state, item) {
      console.log(item);
      state.items.forEach((el) => {
        if (el.id == item.id) {
          el.status = 0;
          el.quantity = 0;
        }
      });
    },
  },
  actions: {
    login() {
      const google_auth_provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(google_auth_provider);
    },
    logout() {
      firebase.auth().signOut();
    },
    setLoginUser({ commit }, user) {
      commit("setLoginUser", user);
    },
    deleteLoginUser({ commit }) {
      commit("deleteLoginUser");
    },

    inCart({ getters, commit }, { id, ko }) {
      if (getters.uid) {
        let cartItem = { itemId: id, itemNum: ko, status: 0 };
        firebase
          .firestore()
          .collection(`users/${getters.uid}/Cart`)
          .add(cartItem)
          .then((doc) => {
            console.log(doc);
            commit("addCart", {
              id: id,
              ko: ko,
            });
            console.log("addCart確認");
          });
      }
    },
    // removeCart({ getters, commit }, id) {
    //   if (getters.uid) {
    //     firebase
    //       .firestore()
    //       .collection(`user/${getters.uid}/Cart`)
    //       .id.delete()
    //       .then(() => {
    //         commit("deleteAddress", { id });
    //       });
    //   }
    // },

    removeCart({ commit }, item) {
      console.log(item);
      commit("removeCart", item);
    },

    fetchCart({ getters, commit }) {
      firebase
        .firestore()
        .collection(`users/${getters.uid}/Cart`)
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            console.log(doc.data().itemId);
            commit("inCart", {
              id: doc.data().itemId,
              ko: doc.data().itemNum,
              status: doc.data().status,
            });
          });
        });
    },
  },
});
