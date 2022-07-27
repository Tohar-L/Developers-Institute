// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds).

// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”

// Instantiate a new Video instance and call the watch() method.

class Video {
	constructor (title, uploader, time) {
		this.title = title;
		this.uploader = uploader;
		this.time = time;
	}
	watch () {
		console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`)
	}
}

const Video1 = new Video ('The Lion King', 'Eden', 5400);

// Instantiate a second Video instance with different values.
const Video2 = new Video ('"Ted Talk - Poker Chips"', 'Michal', 1200);


// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.

// var VideoA;
// var VideoB;
// var VideoC;


// const rootArray = new Video [VideoA, VideoB, VideoC];
// const Videos = new Video()

// const trying = [{
// 	VideoA: {title: 'hi', uploader: 'Aharon', time:  5700},
// 	VideoB :{title: 'go there', uploader:'Raz', time: 1200},
// }]


// const Video2try = ['"Ted Talk - Poker Chips"', 'Michal', 1200];

// const Video2 = new Video (trying[0].title, trying[0].uploader, trying[0].time);
// const Video2 = new Video (['"Ted Talk - Poker Chips"'], ['Michal'], [1200]);



// 	{
// 	VideoC = ('back in the days', 'Ariel', 1300)
// };
