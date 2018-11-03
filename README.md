"echo" - MovableType.net theme framework
====================================

<img alt="echo" src="http://cms-skill.com/echo/images/logo.svg" height="60" />

version 0.1.0 (under construction)

Copyright 2018 WebbingStudio  
Released under the MIT license  
http://opensource.org/licenses/MIT

- - - - - - - - - - - - - - - - - - -

## echoとは

"echo"は、ASP型CMSサービス「MovableType.net」専用のテーマです。制作会社が小・中規模のコーポレートサイトを制作する用途に特化しています。  
利用にはMovable Typeとマークアップの、一定の知識が必要となります。

https://movabletype.net/

CSSフレームワーク「echo.css」をベースとしており、高い自由度とメンテナンス性が特徴です。

https://github.com/webbingstudio/echo-css

echoプロジェクト ポータルサイト  
[http://cms-skill.com/echo/](http://cms-skill.com/echo/)

- - - - - - - - - - - - - - - - - - -

## 重要: パッケージ版・クラウド版との違いについて

Movable Typeパッケージ版・クラウド版では、以下の仕様が大きく異なるため、リポジトリのままでは利用できません。対応させたい場合は、テンプレートを任意で修正してください。

### カスタムフィールドの出力

参考: [https://movabletype.net/tags/2014/11/mtcustomfieldvalue.html](https://movabletype.net/tags/2014/11/mtcustomfieldvalue.html)

### サイト内検索

MovableType.netでは、サイト内検索の機能は提供されていません。
Googleのサイト検索、jQueryプラグイン「flexibleSearch」の利用を検討ください。
参考: [http://bit-part.net/blog/2015/02/movabletypenet-flexiblesearch.html](http://bit-part.net/blog/2015/02/movabletypenet-flexiblesearch.html)	
