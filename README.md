# PokéSurvivor · Vùng Đất Bí Ẩn (Mystery Dungeon)

Tựa game bullet-heaven kết hợp Pokémon theo phong cách của Survivor.io và Megabonk, sử dụng sprite từ
*Pokémon Mystery Dungeon*, cơ chế roguelike, **966 Pokémon thuộc 9 thế hệ (Gen 1-9)**,
Pokémon shiny và hệ thống gacha theo từng vùng (region). Toàn bộ âm nhạc và hiệu ứng âm thanh được sáng tác riêng cho trò chơi.

HTML + CSS + JavaScript thuần (Vanilla JS) trên Canvas 2D. Không cần build, không có thư viện phụ thuộc (dependencies) và
**hoàn toàn chạy cục bộ (offline)**: không cần internet để chơi.

> **Tác giả / Authorship**
>
> PokéSurvivor (mã nguồn và âm nhạc gốc) được sáng tác và thuộc quyền sở hữu của
> **Jonathan Piera Torregrosa**, chủ sở hữu tài khoản GitHub này (JPTER78) và trang web pokesurvivor.com.
> The source code and original music of PokéSurvivor are written and owned by
> **Jonathan Piera Torregrosa**, owner of this GitHub account (JPTER78) and of
> pokesurvivor.com. Yêu cầu gỡ bỏ bản quyền của Google **4-2352000042234**
> (đối với trang pokesurvivor.co) đã được gửi bởi tôi.

> **Cảnh báo về tiền mã hóa / Crypto disclaimer**
>
> PokéSurvivor **không có bất kỳ đồng tiền mã hóa, token hay NFT chính thức nào**, và tôi cũng
> không tạo ra bất kỳ token nào. Mọi token sử dụng tên của trò chơi đều do bên thứ ba tạo ra.
> **Tôi không chịu trách nhiệm cho bất kỳ giao dịch mua bán hoặc đầu tư nào** mà bạn thực hiện
> với chúng, và không có nội dung nào ở đây là lời khuyên đầu tư. Trò chơi là miễn phí và sẽ
> luôn luôn miễn phí.
>
> PokéSurvivor has **no official cryptocurrency, token or NFT**, and I have not
> created any. Any token using the game's name was created by third parties.
> **I take no responsibility for any purchase, sale or investment** you make
> with them, and nothing here is investment advice. The game is free and will
> stay free.

## Cách chơi

Nhấp đúp vào `index.html`. Tạo tài khoản hoặc chơi với tư cách khách (guest), hoàn thành bài trắc nghiệm
tính cách và bắt đầu tiến vào hầm ngục (dungeon).

| Phím | Hành động |
|---|---|
| `W` `A` `S` `D` / các phím mũi tên | Di chuyển |
| `1` `2` `3` `4` | Chọn chiêu thức kích hoạt |
| `Q` / `E` | Chuyển đổi qua lại các chiêu thức |
| `Esc` / `P` | Tạm dừng |

**Trên điện thoại hoặc máy tính bảng** (xoay màn hình ngang): chạm ngón tay vào bất kỳ đâu và kéo
để di chuyển (cần điều khiển joystick ảo sẽ xuất hiện tại nơi bạn chạm), chạm vào chiêu thức ở phía dưới để
đổi chiêu và nhấn nút ở góc trên bên phải để tạm dừng. Có thể cài đặt trò chơi như một ứng dụng
("Thêm vào màn hình chính"). Trong phần **Cài đặt**, bạn có thể tùy chỉnh âm thanh, chất lượng đồ họa
(hỗ trợ chế độ tự động), hiển thị số sát thương, giảm rung lắc màn hình, FPS và quản lý tài khoản.

Pokémon sẽ tự động tấn công bằng chiêu thức đang kích hoạt (hoặc tung ra toàn bộ các chiêu thức trong một
**liên kết**: mỗi Pokémon huyền thoại bị đánh bại sẽ cho phép bạn hợp nhất các chiêu thức để phóng ra
cùng lúc từ một ô duy nhất, tối đa 4 chiêu). Đá, rương kho báu và các bụi cỏ cao có thể bị phá hủy;
tường và cây cối sẽ chặn các phát bắn tầm xa của kẻ địch; nước làm giảm tốc độ di chuyển và dung nham gây bỏng (áp dụng cho cả kẻ địch).

Trên bản đồ có các **bàn thờ sức mạnh**, **suối nước** hồi phục máu, **rương có khóa** (hãy đứng cạnh rương
trong vài giây để mở) và các loại **bẫy** (bẫy cũng gây sát thương lên kẻ địch). Đôi khi một **vết nứt không gian**
sẽ mở ra: bước vào đó và bạn sẽ đối đầu với một **Pokémon huyền thoại** trong một đấu trường riêng biệt.

Trò chơi có **bảng tương khắc hệ** (ví dụ: Tia Bọt Nước gây nhiều sát thương hơn lên Charmander) và
thỉnh thoảng xuất hiện các kiểu **thời tiết** (nắng, mưa, bão cát, tuyết, sương mù) giúp tăng cường sức mạnh
cho một số hệ và làm suy yếu các hệ khác.

Mỗi ngày đều có các **nhiệm vụ hàng ngày** (cũng như nhiệm vụ tuần) trao thưởng vé và tiền xu; các **thành tựu**
trao tặng huy hiệu và danh hiệu, và trang **hồ sơ** của bạn sẽ hiển thị 3 Pokémon yêu thích,
các kỷ lục cùng huy hiệu đạt được. Trong các màn chơi (run), bạn sẽ tìm thấy các **vật phẩm** (Khăn Lựa Chọn - Choice Band,
Thức Ăn Thừa - Leftovers...) và chiêu thức của bạn có thể **tiến hóa** lên cấp tối đa. Kẻ địch có đặc điểm
riêng: biết tự hồi máu, tạo lá chắn hộ thân, gọi bầy đàn hoặc tấn công với vùng cảnh báo hiển thị trên mặt đất.

Các chỉ số **nâng cấp** áp dụng riêng cho từng Pokémon. Hệ thống **gacha** sử dụng **vé** nhận được khi chơi game
(×1 từ một số Pokémon, ×10 từ trùm boss và Pokémon huyền thoại), và được quay trên một cỗ máy đánh bạc phong cách pixel art.

Mỗi kẻ địch có tỉ lệ 1/4096 xuất hiện dưới dạng **Shiny** (sắc màu hiếm): chúng phát sáng, một mũi tên ở mép
màn hình sẽ chỉ hướng vị trí của chúng, và nếu đánh bại nó bạn sẽ thu phục được nó. Trong gacha, tỉ lệ ra
shiny là 1 trên mỗi 100 lượt quay. Trong bộ sưu tập, bạn có thể chọn bạn đồng hành ở phiên bản thường hoặc shiny.

Âm nhạc sẽ bắt đầu phát sau cú nhấp chuột đầu tiên (trình duyệt không cho phép tự động phát âm thanh trước đó).
Âm lượng và tắt tiếng: nút hình loa ở góc trên bên phải, hoặc trong menu tạm dừng.

Dữ liệu lưu game nằm trong `localStorage` của trình duyệt: nếu bạn xóa dữ liệu trang web, dữ liệu sẽ bị mất.

Trong thư mục `videos/` có các video quay lại trò chơi (kèm âm thanh gốc): một trận chiến với boss, cảnh bắt một
shiny hoang dã và một lần quay trúng shiny trong gacha.

## Lưu trữ đám mây và triển khai

- **Cơ sở dữ liệu (Firebase):** đăng ký tài khoản bằng tên đăng nhập + mật khẩu hoặc Google, và bạn có thể
  tiếp tục ván chơi trên bất kỳ máy tính nào. Các bước thực hiện xem tại [docs/FIREBASE.md](docs/FIREBASE.md).
  Nếu không cấu hình, trò chơi chỉ lưu dữ liệu trên trình duyệt như trước.
- **Chơi cùng bạn bè (tối đa 4 người) và bảng xếp hạng:** khi có tài khoản đám mây, bạn có thể mở menu
  **Bạn bè** (thêm bạn bằng biệt danh, mời vào phòng chơi) và **Bảng xếp hạng** (thời gian sống sót: chơi đơn
  hoặc theo nhóm, từ kỷ lục hôm nay đến lịch sử mọi thời đại, bạn bè, theo từng Pokémon).
- **Triển khai miễn phí lên GitHub Pages:** [docs/PUBLICAR.md](docs/PUBLICAR.md).
- Nếu chơi trên hai máy tính cùng lúc hoặc chơi ngoại tuyến, các ván lưu sẽ được **hợp nhất**: bộ sưu tập
  được kết hợp (không bao giờ bị mất Pokémon hay shiny), các nâng cấp và thống kê sẽ giữ lại mức cao nhất,
  còn tiền xu và bạn đồng hành sẽ theo phiên bản mới nhất. Các thay đổi từ máy tính khác sẽ được cập nhật
  theo thời gian thực.

## Giấy phép

Mã nguồn được phát hành theo giấy phép [PolyForm Noncommercial 1.0.0](LICENSE-NONCOMMERCIAL.md) từ ngày
14-10-2026: bạn có thể sử dụng, nghiên cứu và sửa đổi, nhưng **không vì mục đích thương mại** (không được
bán trò chơi hoặc thu phí bất kỳ thứ gì bên trong game). Các phiên bản phát hành trước commit `b297089` được
phát hành theo giấy phép MIT. Các sprite (CC BY-NC 4.0), font chữ (OFL) và thương hiệu Pokémon có các điều kiện
riêng: xem [LICENSE](LICENSE) và [CREDITS.md](CREDITS.md). Đây là dự án của người hâm mộ (fan-made) hoàn toàn
phi lợi nhuận.

**Trang web chính thức duy nhất là [pokesurvivor.com](https://pokesurvivor.com).** Trò chơi hiện tại và mãi mãi
miễn phí: nếu có bất kỳ ai yêu cầu bạn trả tiền, đó chắc chắn không phải là chúng tôi.

## Cấu trúc thư mục

```
index.html              các màn hình + thứ tự tải mã nguồn
css/style.css           giao diện mang phong cách Pokémon Mystery Dungeon
assets/pokemon/{dex}/   sprite sheet PMD (Idle, Walk, Attack, Shoot, Charge, Hurt, Faint)
assets/pokemon/{dex}/s/ sprite sheet tương tự cho phiên bản shiny
assets/fonts/           Font Pixelify Sans (OFL) và phiên bản vẽ lại các chữ số (tools/make_font.py)
js/
  net/      tương tác xã hội (biệt danh, bạn bè, phòng chơi), mạng (WebRTC + máy chủ chuyển tiếp relay),
            chế độ co-op (nhiều người chơi), bảng xếp hạng
  core/     tiện ích, db (lưu trữ), âm thanh (synthesizer + hiệu ứng), đầu vào bàn phím/chuột/cảm ứng,
            sprites (bộ hoạt họa PMD), camera
  data/     pokedex*, sprites-meta*, chiêu thức, Pokémon khởi đầu (+ trắc nghiệm), kẻ địch,
            nâng cấp, âm nhạc (bản phổ nhạc)
  world/    tiles (pixel art vẽ bằng code), world (địa hình, vật thể, va chạm)
  entities/ người chơi, kẻ địch, đạn/chiêu thức bắn ra, vật phẩm nhặt, hiệu ứng hạt fx
  systems/  chiến đấu, sinh quái (spawner), tăng cấp, gacha
  ui/       biểu tượng icon (pixel art), ui, hud, đăng nhập, trắc nghiệm, menu, gacha-ui, run-ui,
            social-ui, ranking-ui
  game.js   luồng xử lý và vòng lặp chính của trò chơi
tools/      các script tạo lại những file được đánh dấu *
```

`*` = được tạo tự động. Để tạo lại các file này (yêu cầu Python 3 + Pillow và kết nối mạng, chỉ cần chạy một lần):

```
python tools/fetch_sprites.py    # tải sprite thường và shiny + js/data/sprites-meta.js
                                 # (~20 phút; có thể tạm dừng và chạy lại: sử dụng tools/cache/)
python tools/fetch_pokedex.py    # tạo js/data/pokedex.js
python tools/fetch_credits.py    # tạo CREDITS.md
```

## Ghi chú kỹ thuật

- **Sprite PMD.** Cột = các khung hình (frames), hàng = 8 hướng (Down, DownRight, Right, UpRight, Up, UpLeft,
  Left, DownLeft — đã được kiểm chứng khớp với các tệp `-Offsets.png`). Mỗi hoạt ảnh có kích thước khung hình riêng,
  vì vậy chúng được căn chỉnh theo **điểm neo dưới đất (ground anchor)** lấy từ `-Shadow.png`; nếu không có điểm neo này,
  sprite sẽ bị nảy/lệch vị trí khi thực hiện đòn đánh.
- **Tọa độ.** Tọa độ `(x, y)` của một thực thể đại diện cho **vị trí chân** của nó. Các va chạm diễn ra trên
  mặt phẳng mặt đất; các đạn/chiêu thức bay trên mặt phẳng đó và được vẽ nâng cao lên cùng bóng đổ bên dưới.
- **Thế giới.** Được chia thành các chunk kích thước 16×16 tile: phần *dữ liệu* (địa hình, vật thể) tiêu tốn rất ít
  tài nguyên và luôn được tạo sẵn; phần *hình ảnh* được nướng sẵn (baked) ở độ phân giải pixel gốc bằng cách ghi vào
  `ImageData` (~4 ms mỗi chunk trên Chrome) và chỉ render cho những chunk nằm trong tầm nhìn.
- **Hiệu năng.** Lưới không gian (spatial grid) của kẻ địch được tái tạo lại mỗi khung hình. Với 420 kẻ địch cùng lúc,
  toàn bộ quá trình mô phỏng + render hoàn chỉnh chỉ tốn ≈ 3 ms mỗi khung hình trên Chrome.
- **Metadata dưới dạng `.js`, không dùng `.json`**, do lệnh gọi `fetch()` bị trình duyệt chặn khi mở qua giao thức tệp cục bộ `file://`.
- **Shiny.** Các sprite shiny từ SpriteCollab là cùng một hình vẽ nhưng thay đổi bảng màu (palette); chúng nằm trong
  thư mục `s/` và chỉ có 30 sprite có sự khác biệt về mặt hình học (thể hiện qua trường `sa` trong metadata). Các tấm
  sprite sheet được lưu dưới định dạng PNG với bảng màu chính xác: cùng hình ảnh nhưng dung lượng giảm đi một nửa.
- **Âm thanh.** Bộ tổng hợp âm thanh Web Audio với cơ chế lập lịch trước (lên lịch các nốt nhạc trước 150 ms) và hiệu ứng
  vang âm chập (convolution reverb) với phản ứng xung tạo sẵn. Các bản phổ nhạc được lưu trong `js/data/music.js` theo
  định dạng văn bản tùy biến riêng. Các hiệu ứng âm thanh có khoảng cách kích hoạt tối thiểu và giới hạn số lượng âm đồng thời,
  tránh hiện tượng quá tải/vỡ tiếng khi 400 kẻ địch bị trúng đòn cùng một lúc.
- **Biểu tượng (Icon).** Bản đồ ký tự được vẽ sang canvas và data URL; luôn được co giãn theo bội số nguyên của kích thước
  gốc để đảm bảo từng điểm ảnh pixel luôn sắc nét.

## Lời cảm ơn và bản quyền

Sprite từ [SpriteCollab](https://github.com/PMDCollab/SpriteCollab) theo giấy phép
**CC BY-NC 4.0** — sử dụng **phi thương mại** và ghi nhận tác giả; danh sách đầy đủ các nghệ sĩ
được liệt kê trong [`CREDITS.md`](CREDITS.md). Pokémon là tài sản thuộc bản quyền của Nintendo, Creatures
Inc. và GAME FREAK. Đây là một dự án của người hâm mộ hoàn toàn phi lợi nhuận.
