export class product{
    name: string;
    description: string;
    price: number;
    id: string | number;
    img: string;

    constructor(name:string, description:string,price:number,id:number|string,img:string){
        this.name=name;
        this.description=description;
        this.price=price;
        this.id=id;
        this.img=img;
    }
}
 let airForce = new product('Nike Air Force 1',`The radiance lives on in the
    Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know 
    best: durably stitched overlays, clean finishes and the perfect amount of flash to make 
    you shine.`,2_199,'peoirj','./src/images/air-force-1.webp');

let airJordan13Retro = new product("Air Jordan 13 Retro", `The Air Jordan 13 Retro brings back the memorable 
game shoe that Michael Jordan wore during the '97-98 season, all the way to his 6th 
championship title. All the classic details are there like the quilted overlay, iconic 
sculpted midsole and holographic eye.`,3_765,"djhgs",`./src/images/air-jordan-13-retro.webp`);

let JBLTune500BT = new product("JBL TUNE500BT",`The JBL TUNE500BT headphones let you stream powerful sound 
with no strings attached for up to 16 hours of pure pleasure. Easy to use and equipped with 
32mm JBL drivers and JBL Pure Bass sound, these headphones provide easy access to great sound 
every time. And if a call comes in while you are watching a video on another device, the JBL 
TUNE500BT seamlessly switches to your mobile. Bluetooth enabled and designed to be comfortable, 
the JBL TUNE500BT headphones also allow you to connect to Siri or Google Now without using your 
mobile device. Available in 4 fresh colors and foldable for easy portability, the JBL TUNE500BT 
headphones are a grab ‘n go solution that help you to inject music into every aspect of your busy 
life.`,720, "2j2h2t", `./src/images/jbl-500-bt.webp`);
/*
{name: "Shield Roll On 50ml Ladies", Description: `Make Shield Women Sensitive Antiperspirant 
Roll-On the cornerstone of your daily routine for up to 48 hours of protection against sweat 
and body odour.`,price: 20, id: "sdj283",img:`./src/images/shield-roll-on.webp`},

{name: "Vaseline® MEN SPF 10 Even Tone Body Lotion", Description: `Vaseline® MEN SPF 10 Even Tone Body 
Lotion protects your skin from sun damage and helps to even skin tone. `,price: 72, id: "2ieudhv",
img:`./src/images/vaseline-cream.webp`},

{name: `Standard Scientific Calculators fx-350CW`, Description: `High-definition & 4-gradation display, 
the current input location is displayed in a darker color. Simple cursor-based operations and a key layout
that follows the natural flow of use.`,price: 72, id: "sbhdv2t6", img:`./src/images/casio-calculator.webp`},];*/