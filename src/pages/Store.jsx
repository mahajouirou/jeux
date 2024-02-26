import React, {useEffect, useState} from 'react'
import image1 from '../../src/imagee/gtav.jpg'
import image2 from '../../src/imagee/fort.jpg'
import image3 from '../../src/imagee/valo.jpg'
import image4 from '../../src/imagee/csgo.png'
import image5 from '../../src/imagee/bfa.jpg'
import image6 from '../../src/imagee/lol.jpg'
import image7 from '../../src/imagee/assasincr.jpg'
import image8 from '../../src/imagee/apex.jpg'
import image9 from '../../src/imagee/cod.jpg'
import image10 from '../../src/imagee/PUBG.png'
import image11 from '../../src/imagee/silent.jpg'
import image12 from '../../src/imagee/wwe.jpg'
import image13 from '../../src/imagee/overwatch.jpg'
import image15 from '../../src/imagee/mtg.jpg'
import image16 from '../../src/imagee/mc.jpg'
import image17 from '../../src/imagee/mortalc.jpg'
import image18 from '../../src/imagee/rockt.png'
import image19 from '../../src/imagee/bf.jpg'
import image20 from '../../src/imagee/fifa.jpg'
import image21 from '../../src/imagee/hitman.jpg'
import image22 from '../../src/imagee/EGS.jpg'
import image23 from '../../src/imagee/amogus.jpg'
import { AiOutlineShoppingCart } from 'react-icons/ai'


const Store = ({products , setproducts , priceCount , total, setTotal}) => {
    const [value, setvalue] = useState('')
    const array =[
        {
            name:'Rocket league',
            prix:45.6,
            img:image18,
            cat:"fps",
            desc: "Rocket League est un jeu vidéo multijoueur développé par Psyonix, un développeur de jeux vidéo basé en Californie. Cela implique généralement que deux équipes s'affrontent dans une série de rondes qui impliquent le basket-ball, le football et le hockey en voiture pour marquer le plus de buts.",
        },
        {
            name:'Battlefield',
            prix:66.4 ,
            img:image19,
            cat:"battle royale",
            desc: "Battlefield (de l'anglais, signifiant littéralement « Champ de bataille ») est une série de jeux vidéo de tir à la première personne développée par DICE et éditée par Electronic Arts, qui a débuté par le jeu Battlefield 1942 en 2002. Le dernier opus de la série est Battlefield 2042, sorti le 19 novembre 2021.",
        },
        {
            name:'FIFA22',
            prix:120.5,
            img:image20,
            cat:"EA sport",
            desc: "FIFA 22 est un jeu vidéo de simulation de football publié par Electronics Arts. Il s'agit du 29ᵉ volet de cette série FIFA. Il est sorti sur Microsoft Windows, Nintendo Switch, Play Station 4, PlayStation 5 et Google Stadia le 1ᵉʳ octobre 2021.",
        },
        {
            name:'HITMAN',
            prix:70.60 ,
            img:image21,
            cat:"fps",
            desc: "Hitman est une série de jeux vidéo d'infiltration à la troisième personne créée par IO Interactive, et notamment par Morten Iversen, mettant en scène le tueur à gages 47.",
        },
        {
            name:'fall guys',
            prix:74.60,
            img:image22,
            cat:"mmo rpg",
            desc: "Fall Guys: Ultimate Knockout est un jeu de plateforme multijoueur à la troisième personne, dont le format s'approche du battle royale. Le joueur prend le contrôle d'un haricot (bean en anglais) dont il peut personnaliser l'apparence.",
        },
        {
            name:'Among us',
            prix:42.50 ,
            img:image23,
            cat:"fps",
            desc: "Among Us est un jeu multijoueur pouvant rassembler quatre à quinze joueurs. Un à trois de ces joueurs sont choisis au hasard à chaque début de partie pour incarner le rôle d'imposteur, tandis que les autres sont des coéquipiers, des vrais membres de l'équipage.",
        },
    
        {
            name:'grand theft auto V',
            prix:85.25 ,
            img:image1,
            cat:"mmo rpg",
            desc: "Grand Theft Auto (GTA) est une série phénomène qui bat les records de ventes année après année. Ce sont ainsi plus de 110 millions d’exemplaires de cet épisode qui se sont écoulés depuis sa sortie en 2013 ; un record qui classe le titre édité par Rockstar Games parmi les meilleures ventes de jeux vidéo aux côtés de Tetris et de Minecraft. La série s’illustre depuis son origine par son caractère irrévérencieux et parfois transgressif.",
        },
        {
            name:'fortnite',
            prix:95.70 ,
            img:image2,
            cat:"battle royale",
            desc: "Fortnite (Battle Royale) est un jeu de survie en ligne gratuit dans un style de dessin cartoonesque, où vous devez être le dernier à rester sur une île. Vous pouvez y jouer seul, à deux ou en équipe de quatre. Le jeu est très populaire auprès des enfants et est connu pour ses nombreuses emotes (danses) amusantes.",
        },
        {
            name:'valorant',
            prix:50.4 ,
            img:image3,
            cat:"shooter",
            desc: " Valorant est un jeu de tir à la première personne avec des héros. Il se déroule dans le futur proche d'un univers alternatif, les joueurs jouant le rôle d'agents (c'est ainsi que sont appelés les héros dans ce jeu), choisissant parmi des personnages issus de toutes sortes de cultures et de pays du monde entier ",
        },
        {
            name:'cs:go',
            prix:85.25 ,
            img:image4,
            cat:"shooter",
            desc: "Titre star de la scène esportive, Counter Strike: Global Offensive est un jeu de tir dans lequel deux équipes s’affrontent en ligne, chacune faisant partie d’un camp, celui des terroristes ou celui des antiterroristes. Depuis fin 2018, le jeu est entièrement gratuit et inclut des achats intégrés. #FPS #Multijoueur #Tactique #AchatsIntégrés #Esport",
        },
        {
            name:'world of warcraft',
            prix:185.25 ,
            img:image5,
            cat:"mmo rpg",
            desc: "Warcraft est une série de jeux vidéo développée et publiée par Blizzard Entertainment. Le premier jeu de la série — Warcraft: Orcs and Humans — est un jeu de stratégie en temps réel, publié en 1994, reprenant le système de jeu de Dune II en le transposant dans un univers médiéval-fantastique s'inspirant notamment de Warhammer et de Donjons et Dragons. ",
        },
        {
            name:'League of Legends',
            prix:85.25 ,
            img:image6,
            cat:"mmo rpg",
            desc: "League of Legends est un jeu de stratégie en équipe dans lequel deux équipes de cinq champions s'affrontent pour détruire la base adverse. Faites votre choix parmi plus de 140 champions disponibles, partez au combat, éliminez vos adversaires avec adresse et abattez les tourelles ennemies pour décrocher la victoire.",
        },

        {
            name:'Assassins creed',
            prix:70.25 ,
            img:image7,
            cat:"fps",
            desc: "Assassin's Creed est un jeu vidéo développé par Ubisoft Montréal sous la direction de Patrice Désilets et Jade Raymond. Il s’agit d’un jeu d'action-aventure au gameplay non linéaire, incorporant des éléments d’infiltration.",
        },
        {
            name:'Apex legends',
            prix:86.20 ,
            img:image8,
            cat:"battle royale",
            desc: "Apex Legends est un jeu vidéo de type battle royale développé par Respawn Entertainment et édité par Electronic Arts. Il est publié en accès gratuit le 4 février 2019 sur Microsoft Windows, PlayStation 4 et Xbox One. Le jeu sort sur Nintendo Switch le 9 mars 2021, enfin la version mobile est sortie le 17 mai 2022.",
        },
        {
            name:'Call of duty',
            prix:60.25 ,
            img:image9,
            cat:"shooter",
            desc: "Call of Duty est un jeu vidéo de tir à la première personne se déroulant pendant la Seconde Guerre mondiale. Développé par le studio Infinity Ward et édité par Activision, il est commercialisé sur Windows et Mac OS X en 2003. Il est le premier jeu de la série Call of Duty.",
        },
        {
            name:'PUBG',
            prix:50.47 ,
            img:image10,
           cat:"shooter",
            desc: "PUBG: Battlegrounds est un jeu vidéo multijoueur en ligne de type battle royale développé et édité par PUBG Studios. Il est disponible en accès anticipé sur Microsoft Windows à partir du 23 mars 2017, et la version 1.0 du jeu est sortie le 20 décembre 2017",
        },
        {
            name:'Silent hell',
            prix:70.5 ,
            img:image11,
            cat:"horror",
            desc: "Silent Hill est un jeu vidéo de type survival horror développé par Konami CE Tokyo et édité par Konami en 1999 sur PlayStation. Réputé pour avoir révolutionné le jeu d'horreur par son approche psychologique de la peur, le titre de Keiichiro Toyama a connu un succès international.",
        },
        {
            name:'WWE 2K19',
            prix:35.54 ,
            img:image12,
            cat:"fps",
            desc: "WWE 2K19 est un jeu vidéo édité par 2K Sports. Il est sorti le 9 octobre 2018, le 5 octobre 2018, mondialement sur PlayStation 4, Xbox One et Microsoft Windows. Il s'agit de la vingtième édition basée sur la fédération de catch World Wresling Entertainment, et du sixième opus de la série WWE 2K.",
        },
        {
            name:'Overwatch',
            prix:90.5,
            img:image13,
            cat:"battle royale",
            desc: "Overwatch est un jeu vidéo de tir à la première personne en ligne et en équipe de 5, développé et publié par Blizzard Entertainment. Ce jeu est une dérive du jeu Vivi vi & co.",
        },
      
        {
            name:'Metal gear solid',
            prix:74.50,
            img:image15,
            cat:"mmo rpg",
            desc: "Metal Gear Solid, communément abrégé MGS, est un jeu vidéo d'action-infiltration produit et réalisé par Hideo Kojima, développé et édité par Konami, et sorti en 1998 sur PlayStation. Troisième épisode de la série Metal Gear, le jeu fait suite à Metal Gear 2: Solid Snake et précède Metal Gear Solid 2: Sons of Liberty",
        },
        {
            name:'MineCraft',
            prix:90.5,
            img:image16,
            cat:"mmo rpg",
            desc: "League of Legends est un jeu de stratégie en équipe dans lequel deux équipes de cinq champions s'affrontent pour détruire la base adverse. Faites votre choix parmi plus de 140 champions disponibles, partez au combat, éliminez vos adversaires avec adresse et abattez les tourelles ennemies pour décrocher la victoire.",
        },
        {
            name:'Mortal combat',
            prix:65.5,
            img:image17,
            cat:"fps",
            desc: "Mortal Kombat II, communément abrégé MKII, est un jeu vidéo de combat développé par la société américaine Midway Manufacturing Company et initialement sorti en novembre 1993 sur borne d'arcade. Il s'agit du second titre de la série Mortal Kombat",
        },
    ]
    const result = array.filter(item => item.name.toUpperCase().includes(value.toUpperCase()));
    const change = (e) => {
        setvalue(e.target.value);
    }
    
    const addtoCart=  (item) => {
        const obj = {
            name:item.name,
            prix: item.prix ,
            img: item.img,
            cat:item.cat,
            desc: item.desc,
        }
            setproducts([...products, obj])
        countTotal()
   }
   useEffect(() => {
        countTotal()
   }, [products])
   const countTotal = () =>{
    products.forEach(item =>{
         priceCount += parseInt(item.prix);
    })
    }
  return (
    <div className='store'>
        <div className="df">
        <h3> </h3>
        <input type="search" placeholder='search' value={value} onChange={change} />
        </div>
        <div className="field">
            {result.map((item, index) => (
                <div className='box' key={index}>
                    <button className='addToCart' onClick={() => addtoCart(item)} ><AiOutlineShoppingCart /></button>
                    <img src={item.img} alt={item.name} />
                    <div className="info">
                        <h6>{item.name}</h6>
                        <p>{item.desc}</p>
                    </div>
                    <p className='prix'>{item.prix} $</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Store