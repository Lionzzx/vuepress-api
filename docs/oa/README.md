<!--
 * @Descripttion:
 * @Author: xiaozm
 * @Date: 2019-12-27 15:24:57
 * @LastEditors  : xiaozm
 * @LastEditTime : 2019-12-30 15:54:45
 -->

## 用户模块(user)

### 更新用户信息

::: tip GET 請求： /user/ilst
:rainbow:方法名：getUpdate
:::

> 调用方法

```js
export { userServe } from '@/serve'
userServe.getUpdate()
```

#### 請求參數

- Props: - `string`, **必填**，用来干嘛的
  - name - `string`, 页面的 markdown slot 的 key. 默认值是 default slot.
- Usage： - `string`, 页面的 markdown slot 的 key. 默认值是 default slot.

```js
{
  data: list: [{ title: 'name' }]
}
```

- `返回結果`

| 字段 | 變量名 | 必填 | 说明 |
| ---- | :----: | ---: | ---- |
| name |  名字  |   是 | 无   |

### 查询列表

::: danger POST 請求： /user/ilst
:rainbow:方法：getUpdate
:::

- `請求參數`

| 字段 | 變量名 | 必填 | 说明 |
| ---- | :----: | ---: | ---- |
| name |  名字  |   是 | 无   |

- `返回結果`

| 字段 | 變量名 | 必填 | 说明 |
| ---- | :----: | ---: | ---- |
| name |  名字  |   是 | 无   |

### 新增刪除

::: danger POST 請求： /user/ilst
:rainbow:方法：getUpdate
:::

- `請求參數`

| 字段     |    變量名     |   必填 | 測試   |
| -------- | :-----------: | -----: | ------ |
| col 3 is | right-aligned | \$1600 | -----: |

- `返回結果`

| 字段     |    變量名     |   必填 | 測試   |
| -------- | :-----------: | -----: | ------ |
| col 3 is | right-aligned | \$1600 | -----: |
