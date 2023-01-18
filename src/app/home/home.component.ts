import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  talkText!: any;
  talkList : any = [
    "Hi Kitty",
    "Hello Kitty",
    "Are you hungry?",
    "Do you want to play?",
    "Meow?",
    "Wanna explode?",
    "Hi Meow",
    "Wassup Kitty?",
    "Wanna eat?",
    "Wanna play?",
    "Yo! Kitty!",
]

kittenTalkList : any = [
  "Hi Hooman",
  "%#^*@",
  "Yes",
  "@&#*",
  "Meh..",
  "@&#* %$@^!",
  "Meow!",
  "Wassup Hooman?",
  "@&#* %$@^!",
  "Maybe",
  "Yo! Hooman!",
]

explode : any = false;
kittenTalkText: any = '';
buttonText: string = "Talk to the kitten";
prevRandomKitty : any
prevRandomTalk : any
  onExplode(){
this.explode = !this.explode
    this.kittenTalkText = ''
    this.talkText = ''
  }

  talk(){
    let random : any = new Date().getMilliseconds();
    random = random.toString().charAt(0)
    if(this.prevRandomTalk == random){
      random = 10
    }else{
      this.prevRandomTalk = random
    }
    this.talkText = this.talkList[random]
    this.kittenTalk();
  
  }

  kittenTalk() {
    let random : any = new Date().getMilliseconds();
    random = random.toString().charAt(0)
    if(this.prevRandomKitty == random){
      random = 10
    }else{
      this.prevRandomKitty = random
    }
    this.explode = false
    this.kittenTalkText = this.kittenTalkList[random]

  }
}
