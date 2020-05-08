---
title: '二分探索'
date: '2020-05-04'
category: "algorithm"
---


## 二分探索を使うとき
- 統計量(平均・最小・最大)の最大/最小化問題
- ある統計量を出すときに、どのくらいの計算量がかかるかを見積もる
- 1回の計算量が軽いとき、統計量を決め打ちして、それ以上/以下で二分法

統計量じゃなくても使えるから、ちゃんとつかう意識を持っておこう。
整数のときは制約から判断(10^9程度)できるが、小数の場合は見えづらい。しかし逆に小数と言うだけで配列をおいたりという考え方が難しくなるので、二分法つかえるかなーという意識は持っておきたい

- [食塩水](https://atcoder.jp/contests/abc034/tasks/abc034_d)
- [Water Bottles](https://atcoder.jp/contests/abc144/tasks/abc144_d)

可能不可能のシミュレーションをどのくらいでできるかがポイントになってくる

- [高橋ノルムくん](https://atcoder.jp/contests/arc049/tasks/arc049_b)


## 単調性のある配列へのアクセス
- 単調性がある場合は、その数以上/以下をlog(n)で求めることができる
    - `import bisect`
- BIT上に値を載せたとき、二部探索のコストは下がる
    - [E - Second Sum](https://atcoder.jp/contests/abc140/tasks/abc140_e)

