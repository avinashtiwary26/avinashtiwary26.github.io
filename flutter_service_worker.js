'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/assets/icons/remarks.png": "8eb65e91d462450be1a4928ba57c2b88",
"assets/assets/icons/bank_input.png": "67e5b3464694ab344afcbef0029aeaa8",
"assets/assets/icons/icon_checked.png": "6601d03c27b67b1425fa75551267b6df",
"assets/assets/icons/train_engine.png": "1f5f52cf99c43135847469f2aadab797",
"assets/assets/icons/share.png": "a0c195df02d52521d688d21dab558ef6",
"assets/assets/icons/ref_icn.png": "83ffa455466d0ec0cfcb540d9f25cc8a",
"assets/assets/icons/deposit_slip_pen.png": "52a057a5d39b07dc58534531784192d7",
"assets/assets/icons/circular_help.png": "c45c2d2ace15f88fa3b54ac465207c11",
"assets/assets/icons/deposit_slip.png": "1bee17ab584012d4d23a13f0e05e8a7a",
"assets/assets/icons/circular_cancel.png": "bde0d9dc6b16e54f6abf3ca040188e4e",
"assets/assets/icons/train_black.png": "40ebb46cd118b3132d83d2b4c3f388bb",
"assets/assets/icons/juncton.png": "d2cfcbfd2a9baeed9958dfb1a0f11623",
"assets/assets/icons/edit.png": "989247b782f54819fa5652915c4abd84",
"assets/assets/icons/from_to.png": "8d277ddafc9c542263317ecaa97b1910",
"assets/assets/images/rupee_icon.png": "f335705a628df91f1a0c46041bcfb22f",
"assets/assets/images/filter_time.png": "e49c45f6b4d39dbdd33a61f06ec8483f",
"assets/assets/images/add.png": "8bff27dc5b55e923ad63f98f70d9ddce",
"assets/assets/images/icon_search.png": "522571b20b47a21534269de3d355a194",
"assets/assets/images/logout_ic.png": "ed4ab81cb833eb43f8944569fbf2b3d3",
"assets/assets/images/work-process.png": "8b213efca919fc2998cac25e04848e94",
"assets/assets/images/bell_with_dot.png": "6b6262d8927199ff09f2db0e6291e213",
"assets/assets/images/hotel_img_2.png": "bc8e7cc254c78eb2d0ebd744c28a2888",
"assets/assets/images/file_tdr.png": "f8373809c396973905157b02c014c927",
"assets/assets/images/pnr.png": "d57c88b2fd658a3eb0894361f8dfa1b1",
"assets/assets/images/download.png": "557833e40477ea2c6b6d762978ad4ec0",
"assets/assets/images/bank_inactive.png": "78c3fa7f1d7ff9082454913b537ec19f",
"assets/assets/images/irctc_download.png": "03b4f8579329ee9233723c180a608151",
"assets/assets/images/success_ic.png": "a94e5a7777e1590c6c162d2d8217fa49",
"assets/assets/images/intro_pg2_ic1.png": "72337f6b3dccceffd54a79e1f3f6f290",
"assets/assets/images/contact_us_ic.png": "11a468f5076f91c22a34608276454c3b",
"assets/assets/images/bell.png": "b14cf00e0711168736b9b3a801f3b5c0",
"assets/assets/images/calendar_ic.png": "a323bcf4b39eae136b6802158edc91e6",
"assets/assets/images/share_flight.png": "314294565fca0f7c3437178fcb53e3bf",
"assets/assets/images/intro_art1.png": "f8f16d49068f59706617fde34c857027",
"assets/assets/images/pending.png": "1551181b6a74589ef6899267383ffe91",
"assets/assets/images/close_dialog.png": "4534b112df4a8db8f8ac29b3f1813aa0",
"assets/assets/images/hotel_placeholder.png": "245ea347417d228590ca5d393a8df795",
"assets/assets/images/eye_hidden.png": "0ff69d8d5e46e2918df814172a8d44da",
"assets/assets/images/timer.png": "b01e4d4e4cd07a1eca85409d2a90af0a",
"assets/assets/images/icon_dropdown.png": "87ef46630163984d4b86767cd138e2f2",
"assets/assets/images/map_google.png": "b4cd9af36f71028f6e2b352316438f1a",
"assets/assets/images/doc_edit.png": "73ee9d9ebe5bd8d10043324c1fff8b8c",
"assets/assets/images/filters.png": "90292bbddb68f10def29db86f043d199",
"assets/assets/images/steering-wheel.png": "9e72a3a580786169cb9d013a24cb5bd1",
"assets/assets/images/booking.png": "8ac937bc65c2e13243a1c7e50e233505",
"assets/assets/images/footer_vector.png": "02800e36db0b8c54fcaa88ea8811fef1",
"assets/assets/images/bus.png": "749daea11757bf5434a77558f7650320",
"assets/assets/images/bulb.png": "6b461f0ce75f4eee0796f5e2ade9d3a9",
"assets/assets/images/one_way.png": "22525b7bdb600d2c6ce0a53d280fac64",
"assets/assets/images/loction_ic.png": "022b095a236afde3a392c581fc45ffb5",
"assets/assets/images/hotel_img_3.png": "c569a39a3fd55b1222ec444885e9652d",
"assets/assets/images/search_white.png": "1e054e5806fed4019799e951873b1a8f",
"assets/assets/images/hotel_passanger.png": "7a1c4d46932b7f199f5f678b1998193b",
"assets/assets/images/seater-ladies.png": "0e670e447d5bee03d2aef22ea47238fa",
"assets/assets/images/booking_history.png": "bcd83ae69008dc8f9dec2a7ea76f3cff",
"assets/assets/images/logo_login.png": "f62e16fb04f8cb710878de154652a9ef",
"assets/assets/images/whatsapp_ic.png": "3b6c81c081d80d0a743307aa01d6c04a",
"assets/assets/images/intro_pg2_ic2.png": "c79c20d67be7fb6b04910cab1ae2678c",
"assets/assets/images/icon_cross_bl.png": "5e22b3be5affaead15c2e182b4fef165",
"assets/assets/images/lang.png": "b794271b09d6248a7acdcd4c8ca6a698",
"assets/assets/images/sortIc.png": "096f074b9bfaa214f1e505afee2e9600",
"assets/assets/images/intro_art2.png": "f994f90a43ecf46e1ed994e82e763e8d",
"assets/assets/images/wallet.png": "85a4c3a1af8c25ae29a7c579c088e665",
"assets/assets/images/calender_ic.png": "6fea881946ec304a4d5958b651693c06",
"assets/assets/images/cocktail.png": "f9bf6e81f39fcd691cfe8af9d0ada150",
"assets/assets/images/flight_ic_multi.png": "7e32fb5cc8c343763cb7787eabd85f22",
"assets/assets/images/hotel_img_1.png": "181cd7f9adf20f0233cebae5c2777b7f",
"assets/assets/images/telephone-call.png": "5f41ff5e2ff4e144da47b7ec1f526345",
"assets/assets/images/markup_profile.png": "37aa54db8d075827df24c0ab9dbc3f0c",
"assets/assets/images/intro_pg3_ic1.png": "5d73695033c56eb9ca20db18baf790e7",
"assets/assets/images/gov_id_voterid.png": "5995e32a3556e34cd670fb52cc6102b8",
"assets/assets/images/plane_depart.png": "7d398c6f32d792d48aae8ce9390ce1ed",
"assets/assets/images/Sleeper-ladies.png": "8e7c97d6426ccdc1b1ae339205ff7898",
"assets/assets/images/help_ic.png": "58bf6acf0140ebfe381db9e42ea9828f",
"assets/assets/images/flight.png": "d1721a0b9bb2312ea51e19a14dae6820",
"assets/assets/images/intro_pg3_ic3.png": "f991141c3df63626ee415cbd84d37f6c",
"assets/assets/images/footer_bg.png": "250b8f4881f4dfa48f6fbc5657d6825e",
"assets/assets/images/seater-booked.png": "de71442467628dce9645934544bcbf8f",
"assets/assets/images/dashboard_bg.png": "f5ccfdb9547b826593a19dc7c3dfd7b6",
"assets/assets/images/cc.png": "e845e0157c568a634d92a146ba1c9e37",
"assets/assets/images/plane_arrival.png": "43bdc3e978733d3fca0acae0481efe07",
"assets/assets/images/bottom_bell.png": "40140c8127599e92864fdc0dc5bffdab",
"assets/assets/images/breakfast_ic.png": "7b70d860d5116191cd1d681a5af2e9b7",
"assets/assets/images/moonIc.png": "28667bc5eafdfcbb5c26312dc154aba9",
"assets/assets/images/passanger.png": "7db64b8c845eefbe798827607348c5e5",
"assets/assets/images/check_train.png": "e8f95cf2690f6ffc11d873051086b3c0",
"assets/assets/images/introlast.png": "2487bad6410f5544ee8c1a4fde9c004f",
"assets/assets/images/success_dialogs.png": "4cb0869be27e679f1480919889ee3b9b",
"assets/assets/images/profile_ic.png": "364cdb7328ce04f88d75d66f7ff420c7",
"assets/assets/images/intro_art3.png": "97326c56e2602e4d072573aa43dbb788",
"assets/assets/images/rejected_ic.png": "6319044208ac202fb97aadfc043b19bb",
"assets/assets/images/refund.png": "bff58d30a0334f423e33db618a9ba03b",
"assets/assets/images/date_range.png": "d147b2b111e5c0b1053d454a0f752304",
"assets/assets/images/download_flight.png": "f38a2e0d7723cee3328703de7c23a1d7",
"assets/assets/images/cctv.png": "4e66ead62a8bb06445804b0482b6b7b0",
"assets/assets/images/train.png": "cc856941f992224334824a18ced880c3",
"assets/assets/images/gov_id_aadhaar.png": "a158f6329ae7d152f8993f98699e55a8",
"assets/assets/images/profile_backup.png": "81ac90ce31007348bb76284a59efe2f5",
"assets/assets/images/helphotel.png": "a7f0561265d5837449786ebdfb178066",
"assets/assets/images/flight_history.png": "c73afba989fdd3e29c1a5599d4115b91",
"assets/assets/images/intro_pg2_ic3.png": "3819e502cd8876b37a33de2c6326cd57",
"assets/assets/images/gov_id_nrega.png": "5f2bfce5ec3b06f679c30dab0d068347",
"assets/assets/images/train_booking.png": "e99c5ce5916cf1e03b915732c357714b",
"assets/assets/images/group.png": "f515da0c88e2b5d0a64d97c221c29163",
"assets/assets/images/default_dp.png": "df63b5559108294bc84744b668099b81",
"assets/assets/images/wallet_icon.png": "8cd40891a703d7afdda0539bf57c2abc",
"assets/assets/images/email.png": "a2c795158b017b84fe419704d85e85dc",
"assets/assets/images/room_img.png": "867275e9d5dcd05d509975ca1e7ce65d",
"assets/assets/images/multiway_details.png": "7bb07330de1e27e8a08db9f53aa25e71",
"assets/assets/images/more.png": "7bb49bd645c99ba7cba991808086fbbf",
"assets/assets/images/icon_round_trip.png": "127c458cc0235be8e2ae6183b8027e84",
"assets/assets/images/armchair.png": "8c193321a6488aed5c30a9e480c13b48",
"assets/assets/images/help_more_ic.png": "360e20f0fbe163f1825e317c156a5d13",
"assets/assets/images/round_trips.png": "5dbc6b5a1ebb7dabea308b8b6e1fb6dc",
"assets/assets/images/hotel_img.png": "e48231dd7f8ed1be5f22899dba09b03a",
"assets/assets/images/icon_train.png": "6a5cb95f46e5621bae4e6e270d47dbf3",
"assets/assets/images/tdr_history.png": "eed9735e0ada2c4bd2a00e20a9762359",
"assets/assets/images/cross_ic.png": "94607f56806629abef93ef59dc722b59",
"assets/assets/images/success_image.png": "7b8ec74670cbc1513f075bd857041286",
"assets/assets/images/change_trains.png": "a5b58ecedfd5838765f6b15071f8fb19",
"assets/assets/images/ic_history.png": "3e03eea8bcff24361c92e5cffbd44ce6",
"assets/assets/images/group_flight.png": "05547764f2711dfcdc57ce8fffeda5da",
"assets/assets/images/helpflight.png": "97bf37093ed64e30722a77883a2b393d",
"assets/assets/images/lang_more_ic.png": "81da5080a8c294852eece5feee848c42",
"assets/assets/images/irctc_id.png": "418e6abf0415924f928d41f0faa502a5",
"assets/assets/images/seater-available.png": "4b799835787ee2b21dd05f02c3d799b9",
"assets/assets/images/login_banner.png": "588b3ec8045df2a9d786f56228b9f31d",
"assets/assets/images/intro_pg3_ic2.png": "3d1d72c8dae9b67d3112d7f2a4af096d",
"assets/assets/images/wallets.png": "0d414b77029405ceef38d13a34e50a3a",
"assets/assets/images/Sleeper-booked.png": "a9183bd30dc1df6ea7b65cf888472364",
"assets/assets/images/compliance.png": "a92a8099ec2d4560c8503365c99c848a",
"assets/assets/images/adhar_twoside.png": "cb2f40daa3d2af338f3840b62556480d",
"assets/assets/images/bus_history.png": "70c347176ec15c84a0931bd8276739f5",
"assets/assets/images/hotel.png": "7a89e076c087d90ac08f4c0313c4a98c",
"assets/assets/images/privacy_policy_ic.png": "8f1c7dd2e2946ac26792d35f618304a8",
"assets/assets/images/help_flight.png": "a947bb9068c8745ea5dd31c386761200",
"assets/assets/images/cancel.png": "0ca61d44ea01b0cf64abd03f776a865a",
"assets/assets/images/Sleeper-available.png": "89d626623680e25bfc59e67f5a01fa79",
"assets/assets/images/mail_red.png": "f4e92fc1c36a4bd511cdfafb3d2d910d",
"assets/assets/images/map.png": "e53aa6be462cd99e69c91539d096abe1",
"assets/assets/images/cam_upload.png": "5b4f4069f989ebe2416cc98d6739c8e9",
"assets/assets/images/upload_front_side.png": "b362974bf4093acecd8a1351d0d42caa",
"assets/assets/images/banner.png": "40466866afa6c29074947d0055364849",
"assets/assets/images/note.png": "ad788fc8ecee1911dfb232130252b16b",
"assets/assets/images/adhar_oneside.png": "0d4f3ae243b4bcd7749ebdfefcd0b539",
"assets/assets/images/Sleeper-selected.png": "41cd1e10eac806bbfed922a8cbab0017",
"assets/assets/images/ic_nationality.png": "f6fdb0f65ecac691cd1b33013e34ca54",
"assets/assets/images/telephone_call.png": "c866712709f9bcfe6eb1937d4eb748aa",
"assets/assets/images/forward_arrow.png": "fb7de03789900ecceea10724b4c08766",
"assets/assets/images/info.png": "d4e4e5b01fc4d88b380e8d848949721b",
"assets/assets/images/helptrain.png": "e5f25d3c2c1019e5645115cd5cbd14f1",
"assets/assets/images/flight_ic.png": "7b67ea081c27d3ef62819aed377854e5",
"assets/assets/images/room_ic.png": "237f1c9a0c4f6f7f7da209b8a44018e3",
"assets/assets/images/irctc_logo.png": "0da955c40220e13ac1b9806b2eaa1fa3",
"assets/assets/images/icon_date_flight.png": "7645e82637243e41e8e7a6431a1176c4",
"assets/assets/images/new_update.png": "efcda0183b2b2e5407a32ec65c60fa4d",
"assets/assets/images/armchair_fill.png": "33deddbf1eacde0c5ce9b17e2d900bb4",
"assets/assets/images/approved_ic.png": "37d48e2562f594bc339c47bfd3eecedb",
"assets/assets/images/success.png": "3f28e75930f0a77ab6ad7ce04dbf0daf",
"assets/assets/images/icon_filter.png": "4c6a4b2a6d008bbf6c90fd5b0d6263aa",
"assets/assets/images/icon_help.png": "da14f6dccb47d8a70945845a3b424749",
"assets/assets/images/bus_icon.png": "aa7017e630be2d07e13a07da85aacad3",
"assets/assets/images/gov_id_passport.png": "60520b73b02f683efa8632b144b5959e",
"assets/assets/images/multi_flightss.png": "687c856a4de664c96cd9853cab3a9c81",
"assets/assets/images/cancel_flight.png": "e3b53eabe50fe5a807a2d00f0fba2b33",
"assets/assets/images/call_red.png": "2f3449aa44fb4d05c834d4a36a529edc",
"assets/assets/images/camera.png": "d0b39280d619f7dfa446496bb0a75a67",
"assets/assets/images/search_icon_new.png": "7f6db370b5c665a4d06c33368f996fcd",
"assets/assets/images/cancel_booking.png": "fc330d14998b54069f1e32f7f9b6d70d",
"assets/assets/images/markup.png": "e1e60d90562b9a84221ae23c6cb5ae32",
"assets/assets/images/back_arrow_ic.png": "f2155f95696bcf56fcd6a4fd44de7f90",
"assets/assets/images/helpbus.png": "8c97d1cf82047ecbb00d3ace06f89252",
"assets/assets/images/gov_id_dl.png": "1f96f00576aefc4147b55c429c6bcf3e",
"assets/assets/images/failed.png": "067199f686b56e2e8e3113230eba78bd",
"assets/assets/images/eye_visible.png": "ba1aee6951bbd3097fbfc3027a836648",
"assets/assets/images/gallery_upload.png": "8b0ae0edb2354f2d71a27c8e0d5fb755",
"assets/assets/images/filter.png": "813b04ed805956d16e47a07834016444",
"assets/assets/images/hotel_dash.png": "e3e663973dcefacf3ccd6f4384f883ee",
"assets/assets/images/new_logo.png": "c5c77385ab93b95027265f588a292ce6",
"assets/assets/images/seater-selected.png": "486424b7e25c040170043a769b50279b",
"assets/assets/images/home_activee.png": "6e30f32ec038a7c1f86a510edaa218e2",
"assets/assets/images/filter_rupees.png": "4255b4b23e17802fd59123f48679d693",
"assets/assets/images/from_to.png": "fa099ec3435269da6b8fd185b1228f96",
"assets/assets/images/pnr_ic.png": "6b3ce43e77c7245eeb76b33af7f96a5a",
"assets/assets/fonts/roboto_regular.ttf": "230e0e1a8b7a17d5f3f03de75adea5a2",
"assets/assets/fonts/roboto_medium.ttf": "894a2ede85a483bf9bedefd4db45cdb9",
"assets/assets/fonts/roboto_bold.ttf": "d329cc8b34667f114a95422aaad1b063",
"assets/NOTICES": "3006dcf44e22911d7e9e1cb8d54002cd",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/FontManifest.json": "409df3525166b0e80778d23ebae8cdc1",
"assets/AssetManifest.json": "0974c51b4a3ba435e0d8cd8fb4db0529",
"manifest.json": "e1852090c8caa9a535ae7cd0fc60c7ce",
"version.json": "cc1e65613f3b296eb93937c4af1292b5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"main.dart.js": "f14f570338bc79487402b4f92303a4bf",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "6958e033f61771d7d723b87f8a45cba5",
"/": "6958e033f61771d7d723b87f8a45cba5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
