# Section F : リップルエフェクト

[Section E - 要素の中央に要素を重ねるテクニック](https://github.com/kmc-jp/css-study-seminar/blob/main/documents/advanced/Section-E.md#%E8%A6%81%E7%B4%A0%E3%81%AE%E4%B8%AD%E5%A4%AE%E3%81%AB%E8%A6%81%E7%B4%A0%E3%82%92%E9%87%8D%E3%81%AD%E3%82%8B%E3%83%86%E3%82%AF%E3%83%8B%E3%83%83%E3%82%AF)で扱った実装の応用として、リップルエフェクトを紹介します。

```html
<button class="form-view--submit">
  確認
</button>
```

```css
.form-view--submit {
  background-color: #555;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 24px;
  height: 60px;
  margin: 100px;
  width: 180px;
}

.form-view--submit:hover {
  background-color: #666;
}

.form-view--submit:active {
  background-color: #5d5d5d;
}
```

## 解説

```css
.form-view--submit {
  background-color: #555;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 24px;
  height: 60px;
  margin: 100px;
  width: 180px;

  overflow: hidden;
  position: relative;
}

.form-view--submit:hover {
  background-color: #666;
}

.form-view--submit:active {
  background-color: #5d5d5d;
}

.ripple {
  animation: ripple-effect 1.2s ease 0s 1 normal none running;
  background-color: #ffffff3a;
  border-radius: 50%;
  pointer-events: none;
  position: absolute;
  transform: translateX(-50%) translateY(-50%);
}

@keyframes ripple-effect {
  0% {
    height: 50px;
    opacity: 1;
    width: 50px;
  }

  100% {
    height: 300px;
    opacity: 0;
    width: 300px;
  }
}
```

```js
document.querySelector('.form-view--submit').addEventListener("click", (event) => {
  event.currentTarget.insertAdjacentHTML("beforeend", `<span class="ripple" style="left: ${event.offsetX}px; top: ${event.offsetY}px"><span>`)
})
```
> [pointer-events | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/pointer-events)

> [animation | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/animation)

> [@keyframes | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/@keyframes)

-----------------

> [Document.querySelector() | MDN](https://developer.mozilla.org/ja/docs/Web/API/Document/querySelector)

> [EventTarget.addEventListener() | MDN](https://developer.mozilla.org/ja/docs/Web/API/EventTarget/addEventListener)

> [Event.currentTarget | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget)

> [Element.insertAdjacentHTML() | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)

> [MouseEvent.offsetX | MDN](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/offsetX)

> [MouseEvent.offsetY | MDN](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/offsetY)
