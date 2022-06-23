const aboutMeStyles = `
<style>
/*Now the styles*/


/*Time to apply widths for accordian to work
Width of image = 640px
total images = 5
so width of hovered image = 640px
width of un-hovered image = 40px - you can set this to anything
so total container width = 640 + 40*4 = 800px;
default width = 800/5 = 160px;
*/

.accordian {
    width: 805px;
    height: 320px;
    overflow: hidden;

    /*Time for some styling*/
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.35);
    -webkit-box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.35);
    -moz-box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.35);
}

/*A small hack to prevent flickering on some browsers*/
.accordian ul {
    width: 1200px;
    /*This will give ample space to the last item to move
\tinstead of falling down/flickering during hovers.*/
}

.accordian li {
    position: relative;
    display: block;
    width: 160px;
    float: left;
    
    box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.5);

    /*Transitions to give animation effect*/
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    /*If you hover on the images now you should be able to 
\tsee the basic accordian*/
}

/*Reduce with of un-hovered elements*/
.accordian ul:hover li {
    width: 40px;
}
/*Lets apply hover effects now*/
/*The LI hover style should override the UL hover style*/
.accordian ul li:hover {
    width: 640px;
}

.accordian li img {
    display: block;
}

/*Image title styles*/
.image_title {
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 0;
    bottom: 0;
    width: 640px;
}
.image_title a {
    display: block;
    color: #fff;
    text-decoration: none;
    padding: 20px;
    font-size: 16px;
}

main .accordian ul {
    padding-left: 0;
}
</style>
`

export default async () => {
  const {AboutMe, emptyClass} = window.Oday;

  return `
              ${aboutMeStyles}
<div class="accordian mt-3 mx-auto">
    <ul>
        <li>
            <div class="image_title">
                <a href="#">KungFu Panda</a>
            </div>
            <a href="#">
                <img src="https://via.placeholder.com/700x500/6495ED/000000" />
            </a>
        </li>
        <li>
            <div class="image_title">
                <a href="#">Toy Story 2</a>
            </div>
            <a href="#">
                <img src="https://via.placeholder.com/700x500/5F9EA0/000000" />
            </a>
        </li>
        <li>
            <div class="image_title">
                <a href="#">Wall-E</a>
            </div>
            <a href="#">
                <img src="https://via.placeholder.com/700x500/FF7F50/000000" />
            </a>
        </li>
        <li>
            <div class="image_title">
                <a href="#">Up</a>
            </div>
            <a href="#">
                <img src="https://via.placeholder.com/700x500/FF1493/000000" />
            </a>
        </li>
        <li>
            <div class="image_title">
                <a href="#">Cars 2</a>
            </div>
            <a href="#">
                <img src="https://via.placeholder.com/700x500/FF69B4/000000" />
            </a>
        </li>
    </ul>
</div>
    `;
};
