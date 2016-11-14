## 1.粘性布局
###js动态实现
1. iOS 系统中 scroll event 在页面滑动中只会被触发一次，而且是在页面滚动完全结束后才会触发。
原理在于iOS下的浏览器会在页面滚动的时候，暂停所有js的执行，直到滚动停止才会继续去执行js（注意暂停了所有js的执行，所以考虑用setTimeout或setInterval也是没有用的）。
所以页面滚动时，scroll事件在iOS的浏览器下并不会持续被触发，而是在页面滚动停止后，才会去触发一次scroll事件。
在Android 2.3及以下的版本的浏览器scroll事件的响应也是跟iOS一样。
2.	在这个情况下，要想实现页面滑动时实时触发 scroll event 通用的解决方案是通过 touchmove event来触发 scroll event 或者执行 scroll event handler, 但是这也不是一种完美的解决方案。
因为在touchend 后，页面由于惯性还是会滚动一段距离，而没有一种事件来监听这种惯性滚动，所以要通过这个方案来实现 iOS 中的吸顶效果并不理想。 
3.	当然我也不反对去模拟 iOS 的 scroll event, 但其复杂度可想而知。 
4.	而Android 2.3以上的版本中虽然有部分浏览器能持续的触发scroll事件，但由于scroll事件的回调函数执行渲染Dom频率还是赶不上滚动的频率（当然还有其他原因，总结来看就是一些性能问题），所以即使是在高版本的Android下，滚动快了，还是会看到原来fixed的元素闪跳归位。


## 2.常用实现方式

 ![image](https://github.com/biggu0/iloveh5/blob/master/test.png)

