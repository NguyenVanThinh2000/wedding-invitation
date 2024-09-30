import img1 from '@/assets/images/DSC02036.jpg'
import img2 from '@/assets/images/DSC02121.jpg'
import img3 from '@/assets/images/DSC02136.jpg'
import img4 from '@/assets/images/DSC02385.jpg'
import img5 from '@/assets/images/DSC02502.jpg'
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
