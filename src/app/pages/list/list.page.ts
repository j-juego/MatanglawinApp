import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  trivia: any[] = [
    {
        "category": 'People',
        "title": "Juan Luna's Darkside",
        "description": 'In 1892, Juan Luna, famous Filipino painter of 400 masterpieces, was involved in a bloody murder at their Paris home. The victims: his wife, Paz Pardo de Tavera, and his mother-in-law. It is said that extreme jealousy forced Luna to pull the trigger. He was later acquitted of the crime.',
        "image": 'https://github.com/j-juego/Images/blob/main/Juan%20Luna.jpg?raw=true',
    },
    {
        "category": 'People',
        "title": "Cory Aquino's Real Favorite Color",
        "description": 'The late President Corazon Aquino, as well as the EDSA People Power Revolution, are best remembered through the iconic ‘yellow ribbon.’ However, she once admitted that RED was actually her first favorite. Her association with the yellow color started when some friends suggested the song “Tie A Yellow Ribbon” for Ninoy’s homecoming.',
        "image": 'https://github.com/j-juego/Images/blob/main/Cory.jpg?raw=true',
    },
    {
        "category": 'People',
        "title": "A former military captain in the Philippines who died in the sinking of Titanic.",
        "description": 'After the war ended, he was assigned to the Philippines as a volunteer and later promoted to Assistant Quartermaster with the rank of Captain. He stayed in Manila until July 1903. In 1912, after a short trip to Europe, Butt embarked on the Titanic to return to the US. Sadly, he was one of the victims who perished when the ship sank. His body was never recovered.',
        "image": 'https://github.com/j-juego/Images/blob/main/Captain.jpg?raw=true',
    },
    {
        "category": 'People',
        "title": "President Ramon Magsaysay’s burial place.",
        "description": 'Magsaysay was the third president to be buried in the Manila North Cemetery. Interestingly, he’s the one who renamed the Republic Memorial Cemetery into the present-day “Libingan ng mga Bayani” in 1954. Lesson learned? A person’s legacy is far greater than his burial place. A noble president and a hero can be buried anywhere.',
        "image": 'https://github.com/j-juego/Images/blob/main/Ramon%20Magsaysay.jpg?raw=true',
    },
    {
        "category": 'People',
        "title": "The Boy Scout hero of Iloilo.",
        "description": 'In 2012, a 4-feet tall statue of the boy was unveiled at Estancia Central Elementary School to honor the 12-year-old Grade 6 pupil who sacrificed his life to save others.',
        "image": 'https://github.com/j-juego/Images/blob/main/Boy%20Scout.png?raw=true',
    },
    {
        "category": 'People',
        "title": "The Filipino doctor who helped discover erythromycin.",
        "description": 'His discovery saved millions, yet he was never paid a single cent.A doctor from Iloilo, Aguilar worked for the pharmaceutical company Eli Lilly and Company as a researcher. Then in 1949, he submitted samples of his work to the company’s research team who in 1952 declared the discovery of a new kind of antibiotic.',
        "image": 'https://github.com/j-juego/Images/blob/main/doctor.png?raw=true',
    },
    {
        "category": 'People',
        "title": "Why most Filipinos lack discipline in their own country.",
        "description": 'In the Inquirer article “The roots of Filipino indiscipline,” UST sociologist Crescencio Doma Jr. said that a lot of Filipinos in the Philippines tend to break laws because they don’t consider certain offenses as “serious” whereas, in other countries, clear punishments are given to offenses, regardless if they’re “small” or “large.” He also said that our society lacks a “strong sense of role modeling” which means public officials and law enforcers have the penchant for breaking the rules themselves.',
        "image": 'https://github.com/j-juego/Images/blob/main/discipline.jpg?raw=true',
    },
    {
        "category": 'People',
        "title": "President Elpidio Quirino’s riveting story of forgiveness.",
        "description": 'In a speech in February 1953 before the delegates of the Philippines-Japan Youth Conference, Quirino said: “Personally, were I to consider that my wife and my three children were all killed by Japanese machine guns, I would swallow the Japanese allies now; but I am not living in the world alone.”“I have my remaining children and their children to follow. I am not going to allow them to inherit feelings of revenge,” he added.',
        "image": 'https://github.com/j-juego/Images/blob/main/Elpidio.png?raw=true',
    },
    {
        "category": 'People',
        "title": "The great Filipino one-man army.",
        "description": 'He single-handedly fought at least 100 heavily armed communist rebels that attacked a military detachment in Claver, Surigao del Norte on March 18, 1991.',
        "image": 'https://github.com/j-juego/Images/blob/main/One%20Man%20army.png?raw=true',
    },
    {
        "category": 'People',
        "title": "The Bagobos’ bizarre beautifying procedure.",
        "description": 'The Bagobo, one of the largest indigenous groups in the country, require their members who have reached the age of puberty to have their teeth filed and blackened. It is a beautifying procedure they consider as an ultimate rite of passage for every young Bagobo. To file the teeth, the candidate must place his head against the operator and grip a stick of wood between his teeth. Each tooth is then filed, leaving only the stump. After the sharpening, the teeth are blackened using either a deposit formed through a smoke coming from a charring bamboo or a powder known as tapEl produced by the lamod tree.',
        "image": 'https://github.com/j-juego/Images/blob/main/Bagobos.jpg?raw=true',
    },
    {
        "category": 'People',
        "title": "The first woman in Harvard Medical School was a Filipina.",
        "description": 'Fe del Mundo was a woman of many firsts. She founded the first pediatric hospital in the Philippines and also invented an improvised incubator, a cloth-suspended scale, and a radiant warmer made of bamboo that was widely used in rural areas. She was also the first woman admitted to Harvard Medical School which only allowed female students almost nine years after she got in.',
        "image": 'https://github.com/j-juego/Images/blob/main/Fe%20Del%20Mundi.png?raw=true',
    },
    {
        "category": 'People',
        "title": "Ferdinand Marcos on a 500-peso bill.",
        "description": 'My 500-peso Marcos bill was never circulated and with the events that proceeded: the snap elections, the disputed victory of Marcos, the success of People’s Power in February 1986 and the instatement of Aquino as President, it perhaps seemed fitting that any vestiges of the overthrown government were thrown off.',
        "image": 'https://github.com/j-juego/Images/blob/main/500.jpg?raw=true',
    },
    {
        "category": 'People',
        "title": "Magsaysay on the cover TIME Magazine.",
        "description": 'However, it should be noted that Magsaysay’s presidential candidacy had the full backing of the Americans. TIME Magazine even reported that “it was no secret that RM [Ramon Magsaysay] was America’s boy.”',
        "image": 'https://github.com/j-juego/Images/blob/main/Magsaysay.jpg?raw=true',
    },
    {
        "category": 'People',
        "title": "Why didn’t people smile in old photos?",
        "description": 'Initially, people took photos using an early photographic process called daguerreotype. It’s long exposure time (reaching up to 15 minutes or so) made it impossible for someone to even hold a smile.',
        "image": 'https://github.com/j-juego/Images/blob/main/Old%20Photo.png?raw=true',
    },
    {
        "category": 'People',
        "title": "The “Matanglawin” of Philippine Revolution.",
        "description": '“After a number of successful encounters with the enemy, Anacleto and his Brigada Pilar met a bitter end at the Church of San Rafael, Bulacan on November 30, 1896. A crack battalion descended upon the group and the Katipuneros were trapped in the church. After a fierce hand to hand combat, more than 800 were killed bayoneted in the gut.',
        "image": 'https://github.com/j-juego/Images/blob/main/Matanglawin.jpg?raw=true',
    }


]

}
