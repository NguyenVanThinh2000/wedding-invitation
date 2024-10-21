import { Facebook } from 'lucide-react'

import thoanthoanQRCode from '@/assets/images/QR-thoan.jpg'
import thinhnguyenQRCode from '@/assets/images/thinhnguyen.jpg'
import { Tiktok } from '@/components/icons'
import { TRole } from '@/types'
import { generateUUID } from '@/utils'

export const img1 = '/wedding-images/THOANTHINH1.jpg'
const img2 = '/wedding-images/THOANTHINH2.jpg'
const img3 = '/wedding-images/THOANTHINH3.jpg'
const img4 = '/wedding-images/THOANTHINH4.jpg'
const img5 = '/wedding-images/THOANTHINH5.jpg'
const img6 = '/wedding-images/THOANTHINH6.jpg'
export const img7 = '/wedding-images/THOANTHINH7.jpg'
const img8 = '/wedding-images/THOANTHINH8.jpg'
const img9 = '/wedding-images/THOANTHINH9.jpg'
const img10 = '/wedding-images/THOANTHINH10.jpg'
const img11 = '/wedding-images/THOANTHINH11.jpg'
const img12 = '/wedding-images/THOANTHINH12.jpg'
const img14 = '/wedding-images/THOANTHINH14.jpg'
const img15 = '/wedding-images/THOANTHINH15.jpg'
// const img16 = '/wedding-images/THOANTHINH16.jpg'
// const img17 = '/wedding-images/THOANTHINH17.jpg'
const img18 = '/wedding-images/THOANTHINH18.jpg'
export const img19 = '/wedding-images/THOANTHINH19.jpg'
export const img20 = '/wedding-images/THOANTHINH20.jpg'
const img21 = '/wedding-images/THOANTHINH21.jpg'
const img22 = '/wedding-images/THOANTHINH22.jpg'
const img23 = '/wedding-images/THOANTHINH23.jpg'
const img24 = '/wedding-images/THOANTHINH24.jpg'
const img25 = '/wedding-images/THOANTHINH25.jpg'
export const img26 = '/wedding-images/THOANTHINH26.jpg'
export const img27 = '/wedding-images/THOANTHINH27.jpg'
const img28 = '/wedding-images/THOANTHINH28.jpg'
const img29 = '/wedding-images/THOANTHINH29.jpg'

const meetImg = '/wedding-images/meet.jpg'
const confessImg = '/wedding-images/confess.jpg'
const proposeImg = '/wedding-images/propose.jpg'
const engagementImg = '/wedding-images/engagement.jpg'
const weddingImg = img24

export const weddingPhotos = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img14,
  img15,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
]

export const loveStories = [
  {
    id: generateUUID(),
    title: 'Cuộc gặp gỡ định mệnh',
    date: '2013',
    content: {
      thoan: `Các bạn có tin vào định mệnh không? Chúng mình đã gặp nhau ở một hoàn cảnh khá đặc biệt khi là đối thủ của nhau tại một lần thi HSG cấp huyện 😂 . Ấn tượng đầu tiên của mình về chồng lúc đó là vừa xấu zai, vừa đen, lại còn ít nói, không có gì nổi bật. 🤭 Nhưng có lẽ định mệnh đã sắp đặt. Bẵng đi một thời gian, anh kiếm ra FB mình và hai đứa cũng chỉ hỏi thăm về tình hình học tập của nhau......Mà nào đâu hay biết rằng sau gần 8 năm người đó lại là chồng của mình.`,
      thinh: `Các bạn có tin vào định mệnh không? Chúng mình đã gặp nhau ở một hoàn cảnh khá đặc biệt khi là đối thủ của nhau tại một lần thi HSG cấp huyện 😂 . Không có ấn tượng gì nhiều, chỉ nhớ là cô ấy được xếp ngồi đằng sau lưng. Nhiều lúc có hỏi bài nhưng mà hong có chỉ 🤭 Nhưng có lẽ định mệnh đã sắp đặt. Bẵng đi một thời gian, mình kiếm được FB cô ấy và hai đứa cũng chỉ hỏi thăm về tình hình học tập của nhau......Mà nào đâu hay biết rằng sau gần 8 năm người đó lại là vợ của mình.`,
    },
    image: meetImg,
  },
  {
    id: generateUUID(),
    title: 'Lời tỏ tình đáng yêu 🥰 🥰',
    date: '2017-04-29',
    content: {
      thoan: `Các cụ có câu: "Lửa gần rơm lâu ngày cũng bén". Ai mà có ngờ đâu, cuộc đời đưa đẩy, sau hơn một năm làm bạn, anh  quyết định tỏ tình mình với một câu nói thẳng thắn: "Làm người yêu anh nha..!" Hơi ngại nhưng mà thui, mình cũng chờ câu nói này lâu lắm rùi ó 😜😝, gật đầu lia lịa lun...`,
      thinh: `Các cụ có câu: "Lửa gần rơm lâu ngày cũng bén". Ai mà có ngờ đâu, cuộc đời đưa đẩy, sau hơn một năm làm bạn, mình quyết định vào thẳng vấn đề: "Ei! Làm người yêu anh nha..!" Có lẽ cô ấy đợi câu nói của mình cũng khá lâu rồi nên cô ấy đồng ý không một chút do dự :p `,
    },
    image: confessImg,
  },
  {
    id: generateUUID(),
    date: '2024-04-29',
    content: {
      thoan: `Thời gian cứ thế trôi qua, tụi mình vẫn yêu nhau như thế. Mình bất ngờ và xúc động khi trong ngày kỉ niệm 7 năm yêu nhau anh đã cầu hôn mình. Không kìm được cảm xúc, mình đã khóc rất nhiều khi nghe anh nói câu: "Đồng ý làm vợ anh nhé!" Và thế là...`,
      thinh: `Thời gian cứ thế trôi qua, tụi mình vẫn yêu nhau như thế. Mình quyết định trong ngày kỉ niệm 7 năm yêu nhau sẽ bí mật cầu hôn cô ấy. Có lẽ vì quá xúc động, cô ấy đã khóc rất nhiều khi nghe mình nói câu: "Đồng ý làm vợ anh nhé!" Và thế là...`,
    },
    title: 'Phút giây cầu hôn',
    image: proposeImg,
  },
  {
    id: generateUUID(),
    title: 'Lễ dạm ngõ',
    date: '2024-07-22',
    content: {
      thoan: `Vì tính chất công việc, tụi mình quyết định dạm ngõ online 😝 Hai bên gia đình, người lớn bàn tính chuyện để chúng mình tiến tới hôn nhân.`,
      thinh: `Vì tính chất công việc, tụi mình quyết định dạm ngõ online 😝 Hai bên gia đình, người lớn bàn tính chuyện để chúng mình tiến tới hôn nhân.`,
    },
    image: engagementImg,
  },
  {
    id: generateUUID(),
    title: 'Chúng mình cưới rồi',
    date: '2024-11',
    content: {
      thoan: `Vậy là tụi mình đã kết thúc hành trình yêu nhau hơn 7 năm và bắt đầu một hành trình mới - về chung một nhà. <br />
              Sau bao nhiêu ngày chờ đợi thì cuối cùng này vui của tụi mình cũng đến rồi. Cảm ơn vì đã lắng nghe và thấu hiểu nhau, cảm ơn vì một phần không thể thiếu trong thanh xuân của nhau. <br />
              "Hạnh phúc đơn giản là tìm đúng người để trao yêu thương, tin tưởng và cùng nhau đi tới cuối con đường."`,
      thinh: `Vậy là tụi mình đã kết thúc hành trình yêu nhau hơn 7 năm và bắt đầu một hành trình mới - về chung một nhà. <br />
              Sau bao nhiêu ngày chờ đợi thì cuối cùng này vui của tụi mình cũng đến rồi. Cảm ơn vì đã lắng nghe và thấu hiểu nhau, cảm ơn vì một phần không thể thiếu trong thanh xuân của nhau. <br />
              "Hạnh phúc đơn giản là tìm đúng người để trao yêu thương, tin tưởng và cùng nhau đi tới cuối con đường."`,
    },
    image: weddingImg,
  },
]

export const groomBrideInfo = [
  {
    tag: 'to. Bride',
    description:
      'Một cô gái thích sự trẻ trung, năng động. Sở hữu vẻ bề ngoài khá mạnh mẽ nhưng trái tim khá mỏng manh và thích được chiều chuộng, yêu thương.',
    image: weddingPhotos[3],
    dad: 'Trần Hữu Đáo',
    mom: 'Trần Thị Thủy',
    social: [
      {
        name: 'facebook',
        link: 'https://www.facebook.com/thoanthoan10a1',
        icon: <Facebook size={24} />,
      },
      {
        name: 'tiktok',
        link: 'https://www.tiktok.com/@avocado0601',
        icon: <Tiktok />,
      },
    ],
  },
  {
    tag: 'to. Groom',
    description:
      'Là một người trầm tính, hướng nội, sống tình cảm và rất yêu trẻ con. Đặc biệt là em bé của anh ấy. <br /> 👈',
    image: weddingPhotos[13],
    dad: 'Nguyễn Văn Cường',
    mom: 'Hoàng Thị Mỹ Nhung',
    social: [
      {
        name: 'facebook',
        link: 'https://www.facebook.com/nvthinh2701/',
        icon: <Facebook size={24} />,
      },
    ],
  },
]

export const weekDays = ['CN', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7']

export const weddingSchedule = [
  {
    id: generateUUID(),
    title: 'HÔN LỄ ĐƯỢC CỬ HÀNH',
    dateTime: '09:30 08/11/2024 - Dương lịch',
    location: 'Tại: Tư gia nhà nữ - Thôn Hà Trung, Xã Gio Châu, Huyện Gio Linh, Tỉnh Quảng Trị',
    mapUrl: `https://www.google.com/maps/place/16%C2%B054'50.2%22N+107%C2%B004'17.9%22E/@16.9139847,107.0713413,91m/data=!3m1!1e3!4m13!1m8!3m7!1s0x3140e84660165e71:0x614e8f1c82b640!2zR2lvIENow6J1LCBHaW8gTGluaCBEaXN0cmljdCwgUXXhuqNuZyBUcuG7iywgVmlldG5hbQ!3b1!8m2!3d16.9073382!4d107.0716609!16s%2Fg%2F1hb_h6s0f!3m3!8m2!3d16.9139444!4d107.0716389?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D`,
    image: weddingPhotos[0],
  },
  {
    id: generateUUID(),
    title: 'LỄ CƯỚI NHÀ NAM',
    dateTime: '07:30 10/10/2024',
    location: 'Tư gia nhà nam - Thôn Vinh Quang Hạ, Xã Gio Quang, Huyện Gio Linh, Tỉnh Quảng Trị',
    mapUrl: 'https://goo.gl/maps/1J1J1J1J1J1J1J1J1',
    image: weddingPhotos[1],
  },
]

export const donateList = [
  {
    id: generateUUID(),
    title: 'Đến cô dâu',
    bankName: 'vietcombank',
    accountNumber: '1015921086',
    accountName: 'Trần Thị Thoan',
    qrCode: thoanthoanQRCode,
  },
  {
    id: generateUUID(),
    title: 'Đến chú rể',
    bankName: 'vietcombank',
    accountNumber: '1024759235',
    accountName: 'Nguyễn Văn Thịnh',
    qrCode: thinhnguyenQRCode,
  },
]

export const invitationInfo = {
  thoan: {
    videoUrl: 'https://www.youtube.com/watch?v=N2qx5YjSMBA',
    hour1: '09',
    minute1: '00',
    hour2: '11',
    minute2: '00',
    weekDay: 'Thứ Sáu',
    day: '08',
    month: '11',
    dayLunar: '08',
    monthLunar: '10',
    location: [
      {
        id: generateUUID(),
        name: 'Tư gia',
        location: 'Hà Trung, Gio Châu, Gio Linh, Quảng Trị',
        mapUrl: `https://www.google.com/maps/place/16%C2%B054'50.2%22N+107%C2%B004'17.9%22E/@16.9139847,107.0713413,91m/data=!3m1!1e3!4m13!1m8!3m7!1s0x3140e84660165e71:0x614e8f1c82b640!2zR2lvIENow6J1LCBHaW8gTGluaCBEaXN0cmljdCwgUXXhuqNuZyBUcuG7iywgVmlldG5hbQ!3b1!8m2!3d16.9073382!4d107.0716609!16s%2Fg%2F1hb_h6s0f!3m3!8m2!3d16.9139444!4d107.0716389?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D`,
      },
      {
        id: generateUUID(),
        name: 'Trung tâm học tập cộng đồng <br /> Thôn Hà Trung',
        location: 'Gio Châu, Gio Linh, Quảng Trị',
        mapUrl: `https://www.google.com/maps/place/16%C2%B054'49.5%22N+107%C2%B004'11.5%22E/@16.9137601,107.0672761,741m/data=!3m2!1e3!4b1!4m13!1m8!3m7!1s0x3140e84660165e71:0x614e8f1c82b640!2zR2lvIENow6J1LCBHaW8gTGluaCBEaXN0cmljdCwgUXXhuqNuZyBUcuG7iywgVmlldG5hbQ!3b1!8m2!3d16.9073382!4d107.0716609!16s%2Fg%2F1hb_h6s0f!3m3!8m2!3d16.913755!4d107.069851?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D`,
      },
    ],
    donate: {
      title: 'Đến cô dâu',
      bankName: 'vietcombank',
      accountNumber: '1015921086',
      accountName: 'Trần Thị Thoan',
      qrCode: thoanthoanQRCode,
    },
  },
  thinh: {
    videoUrl: 'https://www.youtube.com/watch?v=JCnGcCtY7mA',
    hour1: '09',
    minute1: '30',
    hour2: '11',
    minute2: '00',
    weekDay: 'Chủ Nhật',
    day: '10',
    month: '11',
    dayLunar: '10',
    monthLunar: '10',
    location: [
      {
        id: generateUUID(),
        name: 'Tư gia',
        location: 'Vinh Quang Hạ, Gio Quang, Gio Linh, Quảng Trị',
        mapUrl: `https://www.google.com/maps/place/16%C2%B051'36.9%22N+107%C2%B007'14.3%22E/@16.8602443,107.1199853,185m/data=!3m2!1e3!4b1!4m13!1m8!3m7!1s0x3140e84660165e71:0x614e8f1c82b640!2zR2lvIENow6J1LCBHaW8gTGluaCBEaXN0cmljdCwgUXXhuqNuZyBUcuG7iywgVmlldG5hbQ!3b1!8m2!3d16.9073382!4d107.0716609!16s%2Fg%2F1hb_h6s0f!3m3!8m2!3d16.860243!4d107.120629?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D`,
      },
      {
        id: generateUUID(),
        name: 'Trung tâm học tập cộng đồng <br /> Thôn Vinh Quang Hạ',
        location: 'Gio Quang, Gio Linh, Quảng Trị',
        mapUrl: `https://www.google.com/maps/place/16%C2%B051'46.7%22N+107%C2%B007'22.1%22E/@16.8629613,107.1221673,185m/data=!3m2!1e3!4b1!4m13!1m8!3m7!1s0x3140e84660165e71:0x614e8f1c82b640!2zR2lvIENow6J1LCBHaW8gTGluaCBEaXN0cmljdCwgUXXhuqNuZyBUcuG7iywgVmlldG5hbQ!3b1!8m2!3d16.9073382!4d107.0716609!16s%2Fg%2F1hb_h6s0f!3m3!8m2!3d16.86296!4d107.122811?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D`,
      },
    ],
    donate: {
      title: 'Đến chú rể',
      bankName: 'vietcombank',
      accountNumber: '1024759235',
      accountName: 'Nguyễn Văn Thịnh',
      qrCode: thinhnguyenQRCode,
    },
  },
}

export const YEAR = 2024

export const thanksForWishesMapping: Record<TRole, string> = {
  bạn: 'Cảm ơn bạn đã gửi lời chúc đến vợ chồng mình nhaaa!!!',
  anh: 'Cảm ơn anh đã gửi lời chúc đến vợ chồng em nhé!!!',
  chị: 'Cảm ơn chị đã gửi lời chúc đến vợ chồng em nhé!!!',
  ông: 'Cảm ơn ông đã gửi lời chúc đến chúng cháu ạ!!!',
  bà: 'Cảm ơn bà đã gửi lời chúc đến chúng cháu ạ!!!',
  thầy: 'Cảm ơn thầy đã gửi lời chúc đến vợ chồng em ạ!!!',
  cô: 'Cảm ơn cô đã gửi lời chúc đến vợ chồng em ạ!!!',
  em: 'Cảm ơn em đã gửi lời chúc đến vợ chồng anh chị nhé!!!',
  cháu: 'Cảm ơn cháu đã gửi lời chúc nhé!!!',
}

export const questionAttendMapping: Record<TRole, string> = {
  bạn: 'Bạn sẽ tham dự bữa tiệc cùng vợ chồng mình chứ?',
  anh: 'Anh sẽ tham dự bữa tiệc cùng vợ chồng em chứ?',
  chị: 'Chị sẽ tham dự bữa tiệc cùng vợ chồng em chứ?',
  ông: 'Ông có tham dự bữa tiệc cùng chúng cháu không',
  bà: 'Bà có tham dự bữa tiệc cùng chúng cháu không?',
  thầy: 'Thầy sẽ tham dự bữa tiệc cùng vợ chồng em chứ ạ?',
  cô: 'Cô sẽ tham dự bữa tiệc cùng vợ chồng em chứ ạ?',
  em: 'Em sẽ tham dự bữa tiệc cùng vợ chồng anh chị chứ?',
  cháu: 'Cháu có đến tham dự bữa tiệc không?',
}

export const thanksForAttendConfirmYesMapping: Record<TRole, string> = {
  bạn: 'Cảm ơn bạn đã xác nhận tham dự bữa tiệc cùng vợ chồng mình nhaaa!!!',
  anh: 'Cảm ơn anh đã xác nhận tham dự bữa tiệc cùng vợ chồng em nhé!!!',
  chị: 'Cảm ơn chị đã xác nhận tham dự bữa tiệc cùng vợ chồng em nhé!!!',
  ông: 'Cảm ơn ông đã xác nhận tham dự bữa tiệc cùng chúng cháu ạ!!!',
  bà: 'Cảm ơn bà đã xác nhận tham dự bữa tiệc cùng chúng cháu ạ!!!',
  thầy: 'Cảm ơn thầy đã xác nhận tham dự bữa tiệc cùng vợ chồng em ạ!!!',
  cô: 'Cảm ơn cô đã xác nhận tham dự bữa tiệc cùng vợ chồng em ạ!!!',
  em: 'Cảm ơn em đã xác nhận tham dự bữa tiệc cùng vợ chồng anh chị nhé!!!',
  cháu: 'Okeei. Nhớ đến nhé!!!',
}

export const thanksForAttendConfirmNoMapping: Record<TRole, string> = {
  bạn: 'Uii! Thật tiếc khi bạn không tham dự bữa tiệc cùng vợ chồng mình. Nhưng không sao, chúng mình hiểu mà!!!',
  anh: 'Thật tiếc khi anh không tham dự bữa tiệc chùng vợ chồng em. Nhưng không sao, chúng em hiểu mà!!!',
  chị: 'Thật tiếc khi chị không tham dự bữa tiệc chùng vợ chồng em. Nhưng không sao, chúng em hiểu mà!!!',
  ông: 'Cảm ơn ông đã thông báo không tham dự bữa tiệc cùng chúng cháu ạ!!!',
  bà: 'Cảm ơn bà đã thông báo không tham dự bữa tiệc cùng chúng cháu ạ!!!',
  thầy: 'Thật tiếc khi thầy không tham dự bữa tiệc chùng vợ chồng em. Nhưng không sao, chúng em hiểu mà!!!',
  cô: 'Thật tiếc khi cô không tham dự bữa tiệc chùng vợ chồng em. Nhưng không sao, chúng em hiểu mà!!!',
  em: 'Thật tiếc khi em không tham dự bữa tiệc cùng vợ chồng anh chị. Nhưng không sao, anh chị hiểu mà!!!',
  cháu: 'Okeei. Cảm ơn cháu đã thông báo!!!',
}

export const thanksWishesTitleMapping: Record<TRole, string> = {
  bạn: 'chúng mình',
  anh: 'chúng em',
  chị: 'chúng em',
  ông: 'chúng cháu',
  bà: 'chúng cháu',
  thầy: 'chúng em',
  cô: 'chúng em',
  em: 'anh chị',
  cháu: 'dì dượng',
}
