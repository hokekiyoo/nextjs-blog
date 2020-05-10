---
title: 'キーエンス2020 D - Swap and Flip'
date: '2020-05-05'
category: "problems"
---

## 問題概要
- [Swap and Flip](https://atcoder.jp/contests/keyence2020/tasks/keyence2020_d)

- 2N枚のカードがあり、i枚目のカードは表がAi, 裏がBi
- iとi+1のカードを選んで、交換して、両方とも裏返す
- 表に並んだN枚が単調増加になればOK。その最小回数を答えよ

## 考察の痕
- ジグザグにカードの数が並んでいる感じ。あまりは保存される
    - 2n枚目で表だったものが2n+1枚目で表になることはない
    - このあたりの性質をうまく使えないか？
- 偶数番目を予めキメて、奇数番目に入る数を選ぶでどうか(多分O(2^n nCn/2)くらい)
- しかしswapの回数をどう出すかわからず破滅
- swapの回数なければ18C9*2^9は間に合いそうだけど、よくわからない。こういうのって転倒数だっけ？


## 解法1 考察を詰める
※じつはこの考察は惜しくて、偶数番目を予め決めれば、奇数番目は決まっていないカードから降順に並べ替えて奇数番目に割り当てて行くので、1通りに定まる。なので、2^9はかからない。

- 1~NからN//2個取るcombinationでindexを用意して、偶数をそれに従い取る。奇数は残り
- 並び替える前のindexも保持しておいて、偶数で取った札、奇数で取った札をsort
- 偶数と偶数の間に奇数をはめてみて、OKだったらindexを元に転倒数を計算
- 全部試す

転倒数にO(N^2)かかるので、MAXで18^2*18C9の計算量。ギリ行けそう
⇨　これでAC。[実装](https://atcoder.jp/contests/keyence2020/submissions/12989602)


ちなみに、転倒数をO(Nlog)にすることもできる。BITを使ってやる

<img src="https://lh3.googleusercontent.com/A7PHNmOGGWPa-HGZqWzvqnRS_rf-7PePS9E_8o0MNmlnLEF5dotwg__yuAznqgrlmwyw-6Gn5iSYgHEUhUon_fKYFBW2H07NpiHexbyy4TIx-ufnwJiVMfc7eOYGF26ovy1Vm1AaBBdDOTB_rm32X-kg796DkspWZf0vFX0Oh5yV0ZJNKB_O3WvX53JaOZLv6HwPvWvD13hlylsAkEilTufa6Jk-9OEOuDTuApMqL09j1Vejx8IdZs2fGDluULZy1u1GfH7xE4t3JRCr_HebbeDSDq-05m4czsl7eGSeQvKqTf5Iaq4zKcOhgo3nMvmMk54eo66J4oH43N1pWnlw5ytqhELBtzxAK9Afysu1r_KGi3OLtle7JIxa3Y1uwgHWOP7qU913B4nJGabCpwZyBU2CUsTdNHzgpV6nM5Ifz1ZznDZHk-rHbONKg9TduSI5_nhr9QRm_6heYgYlxdUlKTqEqMC1AvD8C5cloiEX4SNjzt9Jj3xheSJKT_9ZAEeU8L6iPI5WmrUAQxQXhZh0ilZPDmbErQUB4p7hIv_Ry8uyWtnmQrEm4RqWqeVeR2Ico-hbG7ScrUDA5olmVVHpgRbydBF_N4yYJTVE68Q-JJgiPViEum9atbmICWPQR-B6EJrQiMVR9qMvdepCgIVIL5roHBwdJKWsxGwYqoeJ2nb6L4AjoJy5ifbWBq3e=w930-h576-no?authuser=0">

BITって、狭義単調増加のときは並べ替えて座標圧縮ってすると順列が作れるから良いとして、広義の単調増加の場合ってどうするんだ

## 解法2 bitDPを使う



ある条件を満たす順列の数え上げを、O(n!)⇨O(2^N)に落とすテク


dp[S と i ] = min(dp[S と i] + dp[S] + なんか)
足される順番は関係ないものに対して適用する(最大、最小とか)から、
ぽいぽい集合にぶっこんでいく。
全部調べたら意図したものが残っている
って感じ？

<img src="https://lh3.googleusercontent.com/caeEgoid8rJZbUVi2H4oNLdi7puNQm7DwkMeJ5CrR87R5Vn5mfPFfCTo1cHg14E8uusrtu8qkD7SFA1z5HPbsiJJiX8nhrLS_JVcJH9ajH3w5RpBLBtLm6pD_giqGmudWciUVpL4XcTRvcFB9lAoZNfB41DPBpD5Cse-YrYTxXU1uoj_KfQYoL3b9-cWgtyC7cYLKxzB6MAt-sqLGCx8Z_8oKmndTObrtM-HpDttb_zbDugLrx3seTMo3mbUQdrylIbpV9j7t414ok_hs0vq_engwwL-q-PV3TFNfmhW9ZaCDprAHHXlZb2r4NhLOiodc5fehxWCx-Rc2gxJ26EwqCN3ymQtma0OFq4gjhjk-AoZWSY2o9iwO3JL1CUL-ie-ZMVCy6U2XeCEgnzf_LCYiAA1FjtcY9paZGOqshayByd7Fyf793cq2OxruCMPndCfI1Yxdpt23-lgv08KwFM6zy_qlLz9O-zftLBz5bnVOPweZegetglM7dxoGk9iA91ptcI4gjHhhijMKQFkEuL1kkkx32IoduqiohKNnsEa6USC9HlUOt1Od-41AvwryPt33iwB54gLmvoMKWNOvxy2xl1MPqT0KrkdG8dSb3UvzhvHlnYtaRM4ne2lPF8TP4UlahaUyqyg35D8PO2QAQi65tnlhL-5opHbw3g0M6xh9MJ2pLgoSinDvBVibWSd=w1040-h327-no?authuser=0">

### 今回


- dp[msk][last] := すでに整列済みの集合がmskで、最後の値がlastであるときの操作の最小値
    - mskの集合分だけ用意できる -> 2^N
- 遷移
    - 最後にある数mを付け足すことでできる集合msk'の最小値で遷移をする
        - mは偶奇で場合分けをする。偶数ならAiから、奇数ならBiから
        - 遷移の途中で並び替えが行われているはずなので、
        - そのindexをcurr(m)、元のindexをorig(m)とする
    - 最後尾はlen(S)で表されるので、そこから何回swapするか。
    - dp[msk|orig(m)][m] = min(dp[msk|orig(m)][m], dp[msk][l] + |len(S)-curr(m)|)

## 実装
- [AC](https://atcoder.jp/contests/keyence2020/submissions/13017657)
- 解法わかっていても結構しんどかった...偶奇やっぱり苦手なんだよな。


## まとめ
swap系の問題はこれが割と典型っぽいので、覚えておきたい

- 類題
    - [E - Sorted and Sorted](https://atcoder.jp/contests/arc097/tasks/arc097_c)
    - [たのしいたのしいたのしい家庭菜園(Growing Vegetables is Fun 3)](http://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=0660)