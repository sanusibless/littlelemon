import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ChefCard from './ChefCard';
import team1 from '../icons_assets/img/team-1.jpg'
import team2 from '../icons_assets/img/team-2.jpg'
import team3 from '../icons_assets/img/team-3.jpg'
import team4 from '../icons_assets/img/team-4.jpg'
import React from 'react'


export default function AllChefs() {

    const chefs = [
        {
            name: "Collins Fawler",
            designation: "Chief Chef",
            img: team1,
        },
        {
            name: "Collins Fawler",
            designation: "Senior Chef",
            img: team2,
        },
        {
            name: "Sam",
            designation: "Junior Chef",
            img: team3,
        },
        {
            name: "Rachel",
            designation: "Senior Chef",
            img: team4,
        }
    ];
    return (
        <section className='all-chefs'>
            <div>
                <h2 style={{
                    textAlign: 'center'
                }}>
                    Meet The Chefs
                </h2>
                <div className='all-chefs-container'>
                {
                    chefs.map(chef => {
                        return <ChefCard {...chef}/>
                    })
                }
                </div>

            </div>
        </section>
    )
}