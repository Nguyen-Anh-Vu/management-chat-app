/*

&HƯỚNG DẪN SỬ DỤNG:
- file name: route-option.ts

-  obj ROUTE_NAME chứa các thuộc tính dạng string chỉ đường dẫn đến các trang web

-  File này là typescript, nên nó chỉ nên chứa code thuần thôi, ko import các icon hay UI gì vào

-  MenuOpts, SubMenuOpts là mảng chứa các object, mỗi object chứa các thuộc tính mô tả đường dẫn đến trng web đó

-  Khi dùng thì ta sử dụng hàm map để liệt kê các object của mảng MenuOpts, SubMenuOpts ra

-  Ví dụ:
      {
         MenuOpts.map((object, index) => {
            return ( 
               <Link href={object.path} >
                  <div className={clsx(styles.xxx)}>
                     <p>{object.title}</p>
                  </div>
               </Link>
            )
         })
      }

^  mục đích của việc phải tách ra như vầy có những ưu điểm như sau:
   +  Nếu ta cần thay đổi tên của path: ROUTE_NAME.CHANNELS, đổi cái ruột bên trong là từ DASHBOARD: "/home" thành DASHBOARD: "/dashboard", thì ta chỉ cần đổi ở đây, nó sẽ tự đổi cho tất cả các vị trí mà dùng route này, ta ko cần phải chỉnh cho từng chỗ nữa
   +  Dễ nhìn để quản lý, khi ta nhìn vào đây là biết ngay project này có bao nhiêu route trang web

*/

export const ROUTE_NAME = {
   DASHBOARD: "/home",
   CHANNELS: "/channels",
   PROFILE: "/profile"
}
export const MenuOpts = [
   {
      id: 1,
      path: ROUTE_NAME.DASHBOARD,
      title: "Dashboards",
      icon: "dashboard"
   },
   {
      id: 2,
      path: ROUTE_NAME.CHANNELS,
      title: "Channels",
      icon: "channel"
   }
]

export const SubMenuOpts = [
   {
      id: 10001,
      path: ROUTE_NAME.PROFILE,
      title: "Profile Information",
      icon: "profile"
   }
]


