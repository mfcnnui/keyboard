<template>
  <div class="container" v-show="visible">
    <div class="keyboard-mask-box" ></div>
    <div class="keyboard-container">
      <div class="password-box" >
        <div class="title-box">请输入交易密码</div>
        <div class="item-box">
          <div class="password-item" v-for="item of maxLength*1"></div>
          <div class="item-inner">
            <div class="password-fill" v-for="item of password">●</div>
          </div>
        </div>
        <div class="forgetPwd" @click="findPwd">忘记密码？</div>
      </div>
      <div class="keyboard-box load-box" v-show="loading">
        <div class="loader"></div>
      </div>
      <div class="keyboard-box" v-show="!loading">
        <div class="key-box number-key-box" @click="clickBtn" v-show="keyboardType">
          <div class="key-item">
            <div class="key-btn" id="1">1</div>
            <div class="key-btn" id="2">2</div>
            <div class="key-btn" id="3">3</div>
          </div>
          <div class="key-item">
            <div class="key-btn" id="4">4</div>
            <div class="key-btn" id="5">5</div>
            <div class="key-btn" id="6">6</div>
          </div>
          <div class="key-item">
            <div class="key-btn" id="7">7</div>
            <div class="key-btn" id="8">8</div>
            <div class="key-btn" id="9">9</div>
          </div>
          <div class="key-item">
            <div class="key-btn" id="00">英</div>
            <div class="key-btn" id="0">0</div>
            <div class="key-btn" id="000">×</div>
          </div>
        </div>
        <div class="key-box text-key-box" @click="clickBtn" v-show="!keyboardType">
          <div class="text-key-item">
            <div >
              <div v-for="item of keyObj_1" class="text-key-btn" :id="item">{{item}}</div>
            </div>
          </div>
          <div class="text-key-item">
            <div class="row-1">
              <div v-for="item of keyObj_2" class="text-key-btn" :id="item">{{item}}</div>
            </div>
          </div>
          <div class="text-key-item">
            <div>
              <div class="text-key-btn shift-del-edit" id="01">↑</div>
              <div v-for="item of keyObj_3" class="text-key-btn" :id="item">{{item}}</div>
              <div class="text-key-btn shift-del-edit" id="02">←</div>
            </div>
          </div>
          <div class="text-key-item">
            <div>
              <div class="text-key-btn enter-btn" id="001">123</div>
              <div class="text-key-btn space-btn" id="">——</div>
              <div class="text-key-btn enter-btn" id="">完成</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.loader {
  position: relative;
  width: 2.5em;
  height: 2.5em;
  transform: rotate(165deg);
}

.loader:before,
.loader:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 0.5em;
  height: 0.5em;
  border-radius: 0.25em;
  transform: translate(-50%, -50%);
}

.loader:before {
  animation: before 2s infinite;
}

.loader:after {
  animation: after 2s infinite;
}

@keyframes before {
  0% {
    width: 0.5em;
    box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75),
      -1em 0.5em rgba(111, 202, 220, 0.75);
  }
  35% {
    width: 2.5em;
    box-shadow: 0 -0.5em rgba(225, 20, 98, 0.75),
      0 0.5em rgba(111, 202, 220, 0.75);
  }
  70% {
    width: 0.5em;
    box-shadow: -1em -0.5em rgba(225, 20, 98, 0.75),
      1em 0.5em rgba(111, 202, 220, 0.75);
  }
  100% {
    box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75),
      -1em 0.5em rgba(111, 202, 220, 0.75);
  }
}

@keyframes after {
  0% {
    height: 0.5em;
    box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75),
      -0.5em -1em rgba(233, 169, 32, 0.75);
  }
  35% {
    height: 2.5em;
    box-shadow: 0.5em 0 rgba(61, 184, 143, 0.75),
      -0.5em 0 rgba(233, 169, 32, 0.75);
  }
  70% {
    height: 0.5em;
    box-shadow: 0.5em -1em rgba(61, 184, 143, 0.75),
      -0.5em 1em rgba(233, 169, 32, 0.75);
  }
  100% {
    box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75),
      -0.5em -1em rgba(233, 169, 32, 0.75);
  }
}
.loader {
  position: absolute;
  top: calc(50% - 1.25em);
  left: calc(50% - 1.25em);
}
.load-box {
  position: relative;
}
.container {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}

.keyboard-mask-box {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.1;
}

.keyboard-container {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 55%;
  display: flex;
  flex-direction: column;
  z-index: 9999;
  background: #fff;
}

.title-box {
  padding: 0 15px 15px 15px;
}

.forgetPwd {
  font-size: 12px;
  padding: 10px 10px 0 10px;
  text-align: right;
  width: 80%;
  color: #5fc491;
}

.item-inner {
  position: absolute;
  display: flex;
}

.item-box {
  display: flex;
  position: relative;
}

.password-box {
  padding: 10px;
  border: 1px solid #cccccc;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-left: 0;
  border-right: 0;
}

.password-container {
  border: 1px solid #cccccc;
  width: auto;
  height: 35px;
  flex: 1;
  display: flex;
}

.password-item {
  border: 1px solid #cccccc;
  width: 45px;
  height: 45px;
  box-sizing: border-box;
}

.password-item:not(:first-child) {
  border-left: 0;
}

.keyboard-box {
  flex: 3;
  display: flex;
  border: 1px solid #cccccc;
  border-top: 0;
  border-right: 0;
  border-left: 0;
}

.password-fill {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: green;
  font-size: 30px;
  box-sizing: border-box;
}

.key-box {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.key-item {
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #cccccc;
}

.key-item:last-child {
  border: 0;
}

.key-btn {
  flex: 1;
  display: flex;
  font-size: 20px;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #cccccc;
}

.key-btn:last-child {
  border: 0;
}

.key-btn:active,
.text-key-btn:active {
  background: #cccccc;
}

.text-key-item {
  padding: 10px 10px 0 10px;
}

.text-key-item > div {
  display: flex;
  justify-content: space-around;
}

.text-key-btn {
  flex: 1;
  display: flex;
  font-size: 20px;
  height: 47px;
  align-items: center;
  justify-content: center;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  margin-right: 5px;
  border-radius: 5px;
}

.text-key-btn:last-child {
  margin: 0;
}

.row-1 {
  padding-left: 20px;
  padding-right: 20px;
}

.shift-del-edit {
  flex: auto;
  width: 15px;
}

.change-btn {
  flex: auto;
  width: 25px;
}

.space-btn {
  flex: auto;
  width: 40px;
}

.enter-btn {
  flex: auto;
  width: 80px;
}
</style>
<script>
import hex_md5 from "md5";
export default {
  name: "keyboard",
  data() {
    return {
      password: "",
      keyboardType: 1,
      visible: false,
      loading: false,
      lowerCaseType: 0,
      keyObj_1: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
      keyObj_2: ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
      keyObj_3: ["z", "x", "c", "v", "b", "n", "m"]
    };
  },
  watch: {
    password(newVal, oldVal) {
      let curPwd = "";
      if (newVal.length == this.maxLength * 1) {
        curPwd = this.isEncrypt ? hex_md5(this.password) : this.password;
        this.loading = true;
        this.$emit("passInputDone", curPwd, this.password.length);
      }
      if (newVal.length > this.maxLength * 1) {
        this.password = oldVal;
      }
      curPwd = this.isEncrypt ? hex_md5(this.password) : this.password;
      this.$emit("passInputChange", curPwd, this.password.length);
    }
  },
  props: {
    maxLength: {
      type: String,
      default: "6"
    },
    isEncrypt: {
      type: Boolean,
      default: false
    }
  },
  created() {},
  methods: {
    clickBtn(e) {
      let target = e.target;
      let keyId = target.id;
      if (!keyId) return;
      if (keyId === "000" || keyId === "02") {
        if (this.password) {
          this.password = this.password.substr(0, this.password.length - 1);
        }
      } else if (keyId === "001") {
        this.keyboardType = !this.keyboardType;
      } else {
        if (keyId === "00") {
          this.keyboardType = !this.keyboardType;
        }else if (keyId === "01") {
          this.lowerCaseType = !this.lowerCaseType;
          if (this.lowerCaseType) {
            this.upperCase();
          } else {
            this.lowerCase();
          }
        } else {
          this.password += keyId;
        }
      }
    },
    //转成大写
    upperCase() {
      let x = [];
      let y = [];
      let z = [];
      this.keyObj_1.forEach(item => {
        x.push(item.toUpperCase());
      });
      this.keyObj_2.forEach(item => {
        y.push(item.toUpperCase());
      });
      this.keyObj_3.forEach(item => {
        z.push(item.toUpperCase());
      });
      this.keyObj_1 = x;
      this.keyObj_2 = y;
      this.keyObj_3 = z;
    },
    //转成小写
    lowerCase() {
      let x = [];
      let y = [];
      let z = [];
      this.keyObj_1.forEach(item => {
        x.push(item.toLowerCase());
      });
      this.keyObj_2.forEach(item => {
        y.push(item.toLowerCase());
      });
      this.keyObj_3.forEach(item => {
        z.push(item.toLowerCase());
      });
      this.keyObj_1 = x;
      this.keyObj_2 = y;
      this.keyObj_3 = z;
    },
    findPwd(e) {
      this.$emit("findPass", e);
    },
    hideKeyboard() {
      this.visible = false;
      this.lowerCaseType = 0;
    }
  }
};
</script>