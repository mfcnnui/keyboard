# 本demo仅供学习交流

> 未经过完整的兼容性测试，且内置密码加密只使用了简单的md5，如果你的项目只是用于演示，并不会运用到关键的项目当中，你可以使用此demo,否则，请慎用！！！
另外，如果你不想使用内置的md5加密方式，请看下文。

## Build Setup

``` bash
# install dependencies
npm i vue-mf-keyboard

#在入口文件main.js中引入并use
import board from 'vue-mf-keyboard';
Vue.use(board)

在组件中使用
<keyboard :isEncrypt='true' @passInputDone='getPwd' @passInputChange='passInputChange' @findPass='findPwd' ref="keyboard"></keyboard>

```
# API文档说明
## maxLength
密码长度对应密码框个数
默认值：6
类型：String

## isEncrypt
### 是否使用内置密码加密
### 默认值：false
### 类型：布尔值

# 回调函数
## passInputDone(pwd,len)
### 输入密码长度达到最大值时触发
### 参数1：pwd --返回的密码 【如果使用了内置md5加密返回加密后的密码，如果没使用则返回原始密码】注--你可以引入你想要的加密组件，并将原始密码传入你的加密组件来进行二次密码加密
### 参数2：len --已输入的原始密码长度

## passInputChange(pwd,len)
### 输入密码时(包括删除)触发
### 参数：同passInputDone

## findPass()
### 点击 “找回密码”时触发
### 参数: 无

# refs
### 组件内部提供了一些方法需要通过在组件定义ref属性，并通过this.$refs.xxx(xxx为你定义的值)来调起
### ps: 以下所有的ref值默认定义为“keyboard”

## showKeyboard()
### 作用：唤起密码键盘界面
### 使用方法： this.$refs.keyboard.showKeyboard();
### 使用场景：在父### 组件里的某一个事件中唤起密码键盘，比如你将进行密码的验证

## hideKeyboard()
### 作用：隐藏密码键盘，并且将英文键盘设置为小写状态和设置键盘类型为数字
### 作用方法：this.$refs.keyboard.hideKeyboard();
### 使用场景：你应当知道在适当的时候隐藏掉密码键盘，并初始化英文键盘为小写状态和键盘类型设置为数字

## showLoading()
### 作用：显示内置的loading动画，当然你也可以不选择使用内置的等待动画，使用符合你业务需求的定义等待动画
### 作用方法：this.$refs.keyboard.showLoading();
### 使用场景：你或许需要在passInputDone()回调开始时调起loading状态,在密码验证接口完成过后关闭它

## hideLoading()
### 作用：隐藏内置的loading动画
### 作用方法：this.$refs.keyboard.hideLoading();
### 使用场景：你或许需要在passInputDone()回调中的密码验证接口完成过后调用它

## clearPassword()
### 作用：初始化密码长度为0
### 作用方法：this.$refs.keyboard.clearPassword();
### 使用场景：你可能需要在隐藏密码键盘的时候清空密码

### 详细的使用方法可以参考本demo的/src/App.vue

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
