import { Facebook, Instagram } from 'lucide-react'

import img1 from '@/assets/images/DSC02036.jpg'
import img2 from '@/assets/images/DSC02121.jpg'
import img3 from '@/assets/images/DSC02136.jpg'
import img4 from '@/assets/images/DSC02385.jpg'
import img5 from '@/assets/images/DSC02502.jpg'
import thinhnguyenQRCode from '@/assets/images/thinhnguyen.jpg'
import { Tiktok } from '@/components/icons'
import { generateUUID } from '@/utils'

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
        icon: <Instagram size={24} />,
      },
    ],
  },
]

export const weekDays = ['CN', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7']

export const weddingSchedule = [
  {
    id: generateUUID(),
    title: 'LỄ CƯỚI NHÀ NỮ',
    dateTime: '07:30 07/10/2024',
    location: 'Tư gia nhà nữ - Thôn Hà Trung, Xã Gio Châu, Huyện Gio Linh, Tỉnh Quảng Trị',
    mapUrl: 'https://goo.gl/maps/1J1J1J1J1J1J1J1J1',
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
    accountNumber: '1024759235',
    accountName: 'Trần Thị Thoan',
    qrCode: thinhnguyenQRCode,
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
