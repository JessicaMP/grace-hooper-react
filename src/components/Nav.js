import React, { Component } from 'react';
import Wikipedia from './assets/images/Wikipedia_logo.png';
import '../App.css';

class Nav extends Component {
    render() {

        const mainPage = ['Main page', 'Contents', 'Featured content', 'Current events', 'Random article', 'Donate to Wikipedia', 'Wikipedia store'];
        const interaction = ['Help', 'About Wikipedia', 'Community portal', 'Recent changes', 'Contact page'];
        const tools = ['What links here', 'Related changes', 'Upload file', 'Special pages', 'Permanent link', 'Page information', 'Wikidata item', 'Cite this page'];
        const print = ['Create a book', 'Download as PDF', 'Printable version'];
        const languages = ['العربية', 'Deutsch', 'Español', 'Français', 'हिन्दी', 'Bahasa Indonesia', 'Português', 'Русский', '中文'];
        return (
            <nav className="navLeft">
                <figure>
                    <img className="wiki-img" src={Wikipedia} />
                </figure>
                <ul>
                    {mainPage.map(function (mainPageItem, i) {
                        return <li key={i}><a href="#li">{mainPageItem}</a></li>
                    })}
                </ul>
                <div>
                    <ul>
                        <p>Interaction</p>
                        <hr />
                        {interaction.map(function (interactionItem, i) {
                            return <li key={i}><a href="#li">{interactionItem}</a></li>
                        })}
                    </ul>
                </div>
                <div>
                    <ul>
                        <p>Tools</p>
                        <hr />
                        {tools.map(function (toolsItem, i) {
                            return <li key={i}><a href="#li">{toolsItem}</a></li>
                        })}
                    </ul>
                </div>
                <div>
                    <ul>
                        <p>Print/export</p>
                        <hr/>
                        {print.map(function (printItem, i) {
                            return <li key={i}><a href="#li">{printItem}</a></li>
                        })}
                    </ul>
                </div>
                <div>
                    <ul>
                        <p>In other projects</p>
                        <hr/>
                        <li><a>Wikimedia Commons</a></li>
                        <li><a>Wikiquote</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <p>Languages</p>
                        <hr/>
                        {languages.map(function (languagesItem, i) {
                            return <li key={i}><a href="#li">{languagesItem}</a></li>
                        })}
                        <button>45 more</button>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;
