<template>
  <div id="home">
    <header id="home-header">首页</header>
    <div id="trends-wrapper">
      <ul>
        <li>
          <div id="user-info">
            <div class="avatar">
              <img src="../../assets/images/touxiang.jpg" alt="头像" srcset="">
            </div>
            <div class="username-wrapper">
              <div class="username">用户名</div>
              <div class="signature">个性签名</div>
            </div>
          </div>
          <article class="trends">
            <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cum omnis perspiciatis aspernatur aliquid error, mollitia porro nulla delectus laborum maxime non dolorum reiciendis, numquam animi quaerat officia aperiam asperiores?</div>
            <div class="images"></div>
          </article>
        </li>
        <li>
          <div id="user-info">
            <div class="avatar">
              <img src="../../assets/images/touxiang.jpg" alt="头像" srcset="">
            </div>
            <div class="username-wrapper">
              <div class="username">用户名</div>
              <div class="signature">个性签名</div>
            </div>
          </div>
          <article class="trends">
            <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cum omnis perspiciatis aspernatur aliquid error, mollitia porro nulla delectus laborum maxime non dolorum reiciendis, numquam animi quaerat officia aperiam asperiores?</div>
            <div class="images"></div>
          </article>
        </li>
        <li>
          <div id="user-info">
            <div class="avatar">
              <img src="../../assets/images/touxiang.jpg" alt="头像" srcset="">
            </div>
            <div class="username-wrapper">
              <div class="username">用户名</div>
              <div class="signature">个性签名</div>
            </div>
          </div>
          <article class="trends">
            <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cum omnis perspiciatis aspernatur aliquid error, mollitia porro nulla delectus laborum maxime non dolorum reiciendis, numquam animi quaerat officia aperiam asperiores?</div>
            <div class="images"></div>
          </article>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style scoped>
#home {
  width: 100%;
  height: 100%;
  position: relative;
}
/* home header */
#home-header {
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  padding: 0 1rem;
  background-color: #fff;
  border: 1px solid #ccc;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
}
/* trends */
#trends-wrapper {
  width: 100%;
  /* height: calc(100% - 3rem); */
  padding: 3rem 0;
  height: 100%;
  overflow: scroll;
}
/* trends list */
#trends-wrapper ul {
  width: 100%;
  box-sizing: border-box;
}
ul li {
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  cursor: pointer;
}
ul li:hover {
  background-color: #f5f5f5;
}
li #user-info {
  height: 3rem;
  display: flex;
  align-items: center;
}
/* avatar */
#user-info .avatar {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  overflow: hidden;
}
.avatar img {
  width: 100%;
  height: 100%;
}
.username-wrapper {
  margin-left: 1rem;
}
.username-wrapper .username {
  font-size: 0.8rem;
  color: #333;
}
.username-wrapper .signature {
  font-size: 0.6rem;
  color: #666;
}
/* trends  */
.trends {
  padding: 0 0 0 3rem;
  line-height: 2rem;
}
.trends .text {
}
.trends .images {
  max-width: 1000px;
  width: 100%;
  height: 200px;
  border-radius: 0.5rem;
  border: 1px solid #666;
}
</style>