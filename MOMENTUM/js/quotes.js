const quotes = [
    {
        quote : "그러므로 우리는 물결을 거스르는 배처럼, 쉴 새 없이 과거 속으로 밀려나면서도 끝내 앞으로 나아가는 것이다.",
        author : "<위대한 개츠비> F.스콧 피츠제럴드"
    },
    {
        quote : "내일은 또 내일의 해가 뜨는 법이니까.",
        author : "<바람과 함께 사라지다> 마거릿 미첼"
    },
    {
        quote : "도망쳐 도착한 곳에 낙원은 없다.",
        author : "<베르세르크> 미우라 켄타로"
    },
    {
        quote : "세상을 바꾸는 데는 신의 영향력보다 인간의 의지가 중요하다.",
        author : "<차라투스트라는 이렇게 말했다> 니체"
    },
    {
        quote : "사랑한다는 것은 다시 태어난다는 것이다.",
        author : "<람세스> 크리스티앙 자크"
    },
    {
        quote : "인간은 가장 깊은 절망의 순간에서조차 아름다움의 법칙에 따라 자신의 삶을 작곡한다.",
        author : "<참을 수 없는 존재의 가벼움> 밀란 쿤데라"
    },
    {
        quote : "사막이 아름다운 것은, 어디엔가 샘을 숨기고 있기 때문이야.",
        author : "<어린왕자> 생택쥐페리"
    },
    {
        quote : "새는 알을 깨고 나온다. 알은 세계다. 태어나고자 하는 자는 하나의 세계를 깨뜨려야한다.",
        author : "<데미안> 헤르만헤세"
    },
    {
        quote : "반복되는 하루는 단 한 번도 없다. 그러므로 너는 아름답다.",
        author : "<두번은 없다> 비스와바 쉼보르스카"
    },
    {
        quote : "가장 중요한 것은 눈에 보이지 않는 법이야.",
        author : "<어린왕자> 생택쥐페리"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;