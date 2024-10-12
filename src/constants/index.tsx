import { Facebook, Instagram } from 'lucide-react'

import img1 from '@/assets/images/DSC02036.png'
import img2 from '@/assets/images/DSC02121.png'
import img3 from '@/assets/images/DSC02136.png'
import img4 from '@/assets/images/DSC02385.png'
import img5 from '@/assets/images/DSC02502.png'
import thoanthoanQRCode from '@/assets/images/QR-thoan.jpg'
import thinhnguyenQRCode from '@/assets/images/thinhnguyen.jpg'
import { Tiktok } from '@/components/icons'
import { generateUUID } from '@/utils'
import { TRole } from '@/types'

export const weddingPhotos = [img1, img2, img3, img4, img5]

export const loveStories = [
  {
    id: generateUUID(),
    title: 'Bạn có tin vào tình yêu online không?',
    date: '2017-04-29',
    content: `Tôi đã từng không tin vào tình yêu online. Đã từng nghĩ làm sao có thể thích một người chưa từng gặp mặt? Vậy mà giờ đây tôi lại đang như vậy, bây giờ tôi đã hiểu: thế giới ảo tình yêu thật đấy!!! Ngày ấy vu vơ đăng một dòng status trên facebook than thở, vu vơ đùa giỡn nói chuyện với một người xa lạ chưa từng quen. Mà nào hay biết, 4 năm sau người ấy lại là chồng mình.`,
    image: weddingPhotos[0],
  },
  {
    id: generateUUID(),
    title: 'Lời tỏ tình dễ thương^^',
    date: '2017-04-29',
    content: `Tôi đã từng không tin vào tình yêu online. Đã từng nghĩ làm sao có thể thích một người chưa từng gặp mặt? Vậy mà giờ đây tôi lại đang như vậy, bây giờ tôi đã hiểu: thế giới ảo tình yêu thật đấy!!! Ngày ấy vu vơ đăng một dòng status trên facebook than thở, vu vơ đùa giỡn nói chuyện với một người xa lạ chưa từng quen. Mà nào hay biết, 4 năm sau người ấy lại là chồng mình.`,
    image: weddingPhotos[0],
  },
  {
    id: generateUUID(),
    title: 'Phút giây cầu hôn',
    date: '2017-04-29',
    content: `Tôi đã từng không tin vào tình yêu online. Đã từng nghĩ làm sao có thể thích một người chưa từng gặp mặt? Vậy mà giờ đây tôi lại đang như vậy, bây giờ tôi đã hiểu: thế giới ảo tình yêu thật đấy!!! Ngày ấy vu vơ đăng một dòng status trên facebook than thở, vu vơ đùa giỡn nói chuyện với một người xa lạ chưa từng quen. Mà nào hay biết, 4 năm sau người ấy lại là chồng mình.`,
    image: weddingPhotos[0],
  },
]

export const groomBrideInfo = [
  {
    tag: 'to. Groom',
    description:
      'Là bác sĩ nha khoa hiện đang công tác tại một phòng khám nha khoa ở Quận 1 thành phồ Hồ Chí Minh. Là một người hiền lành và ít nói. Luôn coi trọng tình cảm và yêu thương gia đình. Với anh: “Gia đình là điểm tựa vững chắc nhất và là bến đỗ bình yên không đâu sánh bằng đối với mỗi con người. Đó luôn là nơi tràn ngập tình yêu thương để ta trở về.”',
    image: weddingPhotos[1],
    dad: 'Nguyễn Văn Cường',
    mom: 'Hoàng Thị Mỹ Nhung',
    social: [
      {
        name: 'facebook',
        link: 'https://www.facebook.com/thinh.nguyen.1994/',
        icon: <Facebook size={24} />,
      },
      {
        name: 'instagram',
        link: 'https://www.instagram.com/thinhnguyen_94/',
        icon: <Instagram size={24} />,
      },
      {
        name: 'tiktok',
        link: 'https://www.tiktok.com/@thinhnguyen_94',
        icon: <Tiktok />,
      },
    ],
  },
  {
    tag: 'to. Bride',
    description:
      'Cô gái đến từ xứ Huế mộng mơ, hiện đang sinh sống và làm việc tại Sài Gòn. Sau khi tốt nghiệp Học viện Báo chí và Tuyên truyền, quyết tâm theo đuổi đam mê làm phóng viên du lịch. Là một người hay cười nhưng lại sống nội tâm, thích đọc sách, trồng cây và yêu thiên nhiên. Ngoài ra còn rất thích vẽ vời, nuôi mèo và nuôi ước mơ có cho mình một vườn hồng khoe sắc.',
    image: weddingPhotos[0],
    dad: 'Trần Hữu Đáo',
    mom: 'Trần Thị Thủy',
    social: [
      {
        name: 'facebook',
        link: 'https://www.facebook.com/thinh.nguyen.1994/',
        icon: <Facebook size={24} />,
      },
      {
        name: 'instagram',
        link: 'https://www.instagram.com/thinhnguyen_94/',
        icon: <Instagram size={24} />,
      },
      {
        name: 'tiktok',
        link: 'https://www.tiktok.com/@thinhnguyen_94',
        icon: <Tiktok />,
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
        name: 'Trung tâm học tập cộng đồng Thôn Hà Trung',
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
        name: 'Trung tâm học tập cộng đồng Thôn Vinh Quang Hạ',
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
  'bạn': 'Cảm ơn bạn đã gửi lời chúc đến vợ chồng mình nhaaa!!!',
  'anh': 'Cảm ơn anh đã gửi lời chúc đến vợ chồng em nhé!!!',
  'chị': 'Cảm ơn chị đã gửi lời chúc đến vợ chồng em nhé!!!',
  'ông': 'Cảm ơn ông đã gửi lời chúc đến chúng cháu ạ!!!',
  'bà': 'Cảm ơn bà đã gửi lời chúc đến chúng cháu ạ!!!',
  'thầy': 'Cảm ơn thầy đã gửi lời chúc đến vợ chồng em ạ!!!',
  'cô': 'Cảm ơn cô đã gửi lời chúc đến vợ chồng em ạ!!!',
}

export const questionAttendMapping: Record<TRole, string> = {
  'bạn': 'Bạn sẽ tham dự bữa tiệc cùng vợ chồng mình chứ?',
  'anh': 'Anh có tham dự bữa tiệc cùng vợ chồng em không?',
  'chị': 'Chị có tham dự bữa tiệc cùng vợ chồng em không?',
  'ông': 'Ông có tham dự bữa tiệc cùng chúng cháu không?',
  'bà': 'Bà có tham dự bữa tiệc cùng chúng cháu không?',
  'thầy': 'Thầy có tham dự bữa tiệc cùng vợ chồng em không?',
  'cô': 'Cô có tham dự bữa tiệc cùng vợ chồng em không?',
}

export const thanksForAttendConfirmYesMapping: Record<TRole, string> = {
  'bạn': 'Cảm ơn bạn đã xác nhận tham dự bữa tiệc cùng vợ chồng mình nhaaa!!!',
  'anh': 'Cảm ơn anh đã xác nhận tham dự bữa tiệc cùng vợ chồng em nhé!!!',
  'chị': 'Cảm ơn chị đã xác nhận tham dự bữa tiệc cùng vợ chồng em nhé!!!',
  'ông': 'Cảm ơn ông đã xác nhận tham dự bữa tiệc cùng chúng cháu ạ!!!',
  'bà': 'Cảm ơn bà đã xác nhận tham dự bữa tiệc cùng chúng cháu ạ!!!',
  'thầy': 'Cảm ơn thầy đã xác nhận tham dự bữa tiệc cùng vợ chồng em ạ!!!',
  'cô': 'Cảm ơn cô đã xác nhận tham dự bữa tiệc cùng vợ chồng em ạ!!!',
}

export const thanksForAttendConfirmNoMapping: Record<TRole, string> = {
  'bạn': 'Cảm ơn bạn đã thông báo không tham dự bữa tiệc cùng vợ chồng mình nhaaa!!!',
  'anh': 'Cảm ơn anh đã thông báo không tham dự bữa tiệc cùng vợ chồng em nhé!!!',
  'chị': 'Cảm ơn chị đã thông báo không tham dự bữa tiệc cùng vợ chồng em nhé!!!',
  'ông': 'Cảm ơn ông đã thông báo không tham dự bữa tiệc cùng chúng cháu ạ!!!',
  'bà': 'Cảm ơn bà đã thông báo không tham dự bữa tiệc cùng chúng cháu ạ!!!',
  'thầy': 'Cảm ơn thầy đã thông báo không tham dự bữa tiệc cùng vợ chồng em ạ!!!',
  'cô': 'Cảm ơn cô đã thông báo không tham dự bữa tiệc cùng vợ chồng em ạ!!!',
}