import React, {useEffect, useState} from 'react'
import image1 from '../../src/imagee/gtav.jpg'
import image2 from '../../src/imagee/fort.jpg'
import image3 from '../../src/imagee/valo.jpg'
import image4 from '../../src/imagee/csgo.png'
import image5 from '../../src/imagee/bfa.jpg'
import image6 from '../../src/imagee/lol.jpg'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Feed = ({products , setproducts , priceCount , total, setTotal}) => {
    const [value, setvalue] = useState('')
    const array =[
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
    <div className='feed content'>
        <div className="df">
        <h3>News</h3>
        <input type="search" placeholder='search' value={value} onChange={change} />
        </div>
        <div className="field">
            {result.map((item, index) => (
                <div className='box' key={index}>
                    <button className='addToCart' onClick={() => addtoCart(item)} ><AiOutlineShoppingCart /></button>
                    <div className="imgHolder">
                    <img src={item.img} alt={item.name} />
                    </div>
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

export default Feed