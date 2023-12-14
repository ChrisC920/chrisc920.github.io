document.addEventListener('DOMContentLoaded', function () {
    const articleData = {
        title: 'Navigating the AI Landscape: Promises and Pitfalls',
        author: 'Christopher Cho',
        content: `
            <p>

            <p>Greetings, curious minds! 🌐 Today, we're delving into the realm of artificial intelligence, exploring its profound impact on education, communication, and healthcare. Buckle up as we unravel the complexities, weighing the pros and cons of this technological juggernaut.</p>
            
            <h2>1. AI in Education: A Scholarly Companion 🎓</h2>
            
            <p>In the evolution from chalkboards to digital realms, artificial intelligence has become an integral part of education. Online platforms and cutting-edge teaching methods owe their efficiency to AI's prowess. It facilitates the development of innovative content and offers unprecedented learning possibilities. However, the absence of emotional connection, a hallmark of human educators, raises concerns about its impact on students' well-being. The question looms: Can AI truly replace the nuanced understanding and empathetic touch of a human teacher?</p>
            
            <h2>2. AI in Communication: Shaping the Digital Discourse 🤖💬</h2>
            
            <p>The rise of AI in major social media platforms has altered the dynamics of information dissemination. Algorithms wielded by giants like Facebook and Twitter influence what content reaches the public eye, raising questions about authenticity and diversity. Deepfake technology further complicates matters, posing a potential threat to the reliability of online communication. As AI continues to shape the flow of information, a critical reassessment of its risks and challenges becomes imperative.</p>
            
            <h2>3. AI in Healthcare: Revolutionizing Diagnostics 💉</h2>
            
            <p>Within the healthcare domain, AI emerges as a transformative force, showcasing unparalleled potential in diagnostics and patient assessment. Its pattern recognition and analytical capabilities enable accurate disease identification, even surpassing the proficiency of medical professionals in certain scenarios. From diagnosing elusive infections to offering remote clinical evaluations, AI presents a paradigm shift in healthcare delivery. Yet, the question remains—can it replicate the holistic understanding and compassion inherent in human medical practitioners?</p>
            
            <h2>4. AI: Balancing the Scales of Progress 🚀💥</h2>
            
            <p>As we stand on the cusp of a technological revolution, the potential of AI to reshape our world is undeniable. Reflecting on past innovations, it becomes evident that every groundbreaking technology carries inherent risks. Geoengineering and virology serve as cautionary tales, reminding us to tread carefully. The path forward necessitates thoughtful policies and rigorous research to harness the benefits of AI while mitigating potential threats. The balance between progress and responsibility will define our journey with this formidable technology.</p>
            
            <p>In conclusion, the AI narrative is intricate, marked by transformative potential and ethical considerations. As we navigate this landscape, let's approach the promises and pitfalls of AI with a discerning eye, recognizing the need for cautious optimism and strategic governance.</p>
            </p>
        `,
    };

    const articleContainer = document.getElementById('article');

    articleContainer.innerHTML = `
        <h1>${articleData.title}</h1>
        <h4>${articleData.author}</h2>
        ${articleData.content}
    `;

    const mlaCitations = [
        "Amira, Vaishnavi Yada. 'How Tesla Is Using AI and Big Data Analytics in Their Self Driving Cars?' Medium, Dare To Be Better, 16 Feb. 2023, medium.com/dare-to-be-better/how-tesla-is-using-ai-and-big-data-analytics-in-their-self-driving-cars-7072e410c1b8.",
        "Anderson, Janna. 'As AI Spreads, Experts Predict the Best and Worst Changes in Digital Life by 2035.' Pew Research Center: Internet, Science & Tech, Pew Research Center, 21 June 2023, www.pewresearch.org/internet/2023/06/21/as-ai-spreads-experts-predict-the-best-and-worst-changes-in-digital-life-by-2035/.",
        "Artificial Intelligence for the Real World - Blockqai, blockqai.com/wp-content/uploads/2021/01/analytics-hbr-ai-for-the-real-world.pdf. Accessed 4 Dec. 2023.",
        "Benefits, Limits, and Risks of GPT-4 as an AI Chatbot for Medicine - Nejm, www.nejm.org/doi/full/10.1056/NEJMsr2214184. Accessed 4 Dec. 2023.",
        "Buch, Varun H, et al. 'Artificial Intelligence in Medicine: Current Trends and Future Possibilities.' The British Journal of General Practice : The Journal of the Royal College of General Practitioners, U.S. National Library of Medicine, Mar. 2018, www.ncbi.nlm.nih.gov/pmc/articles/PMC5819974/.",
        "Chu, Linda, et al. 'The Potential Dangers of Artificial Intelligence for Radiology and Radiologists.' Journal of the American College of Radiology, www.jacr.org/article/S1546-1440(20)30403-8/fulltext. Accessed 4 Dec. 2023.",
        "Chui, Michael, et al. 'The State of AI in 2023: Generative AI’s Breakout Year.' McKinsey & Company, McKinsey & Company, 1 Aug. 2023, www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-in-2023-generative-ais-breakout-year#leading.",
        "Cwik, Bryan. 'Moving beyond ‘therapy’ and ‘Enhancement’ in the Ethics of Gene Editing: Cambridge Quarterly of Healthcare Ethics.' Cambridge Core, Cambridge University Press, 17 Sept. 2019, www.cambridge.org/core/journals/cambridge-quarterly-of-healthcare-ethics/article/moving-beyond-therapy-and-enhancement-in-the-ethics-of-gene-editing/0C3C87FF1344EEC69D5457A4E52B58C8.",
        "E, Chackravarthy. 'The Tiktok AI Algorithm That Got Millions of Users Hooked.' Argoid, 26 June 2023, www.argoid.ai/blog/the-ai-algorithm-that-got-tiktok-users-hooked.",
        "Hagendorff, Thilo. 'The Ethics of AI Ethics: An Evaluation of Guidelines - Minds and Machines.' SpringerLink, Springer Netherlands, 28 July 2020, link.springer.com/article/10.1007/s11023-020-09517-8.",
        "Innovation: Managing Risk, Not Avoiding IT - Future of Humanity Institute, www.fhi.ox.ac.uk/wp-content/uploads/Managing-existential-risks-from-Emerging-Technologies.pdf. Accessed 4 Dec. 2023.",
        "Jennifer Chu  |  MIT News. 'A Pose-Mapping Technique Could Remotely Evaluate Patients with Cerebral Palsy.' MIT News | Massachusetts Institute of Technology, news.mit.edu/2023/pose-mapping-technique-cerebral-palsy-patients-0914. Accessed 3 Dec. 2023.",
        "Jungherr, Andreas, and Ralph Schroeder. 'Artificial Intelligence and the Public Arena .' Academic.Oup.Com, academic.oup.com/ct/article/33/2-3/164/7202294. Accessed 3 Dec. 2023.",
        "Makridakis, Spyros. 'The Forthcoming Artificial Intelligence (AI) Revolution: Its Impact on Society and Firms.' Futures, Pergamon, 3 Apr. 2017, www.sciencedirect.com/science/article/pii/S0016328717300046.",
        "Mozur, Adam Satariano and Paul. 'The People Onscreen Are Fake. the Disinformation Is Real.' The New York Times, The New York Times, 7 Feb. 2023, www.nytimes.com/2023/02/07/technology/artificial-intelligence-training-deepfake.html.",
        "Peter Dizikes  |  MIT News. 'Who Will Benefit from Ai?' MIT News | Massachusetts Institute of Technology, news.mit.edu/2023/who-will-benefit-ai-machine-usefulness-0929. Accessed 3 Dec. 2023.",
        "Pisica, Alina Iorga, et al. 'Implementing Artificial Intelligence in Higher Education: PROS and Cons from the Perspectives of Academics.' MDPI, Multidisciplinary Digital Publishing Institute, 5 May 2023, www.mdpi.com/2075-4698/13/5/118.",
        "Schulz, Peter, and Kent Nakamoto. 'Patient Behavior and the Benefits of Artificial Intelligence: The Perils of ‘Dangerous’ Literacy and Illusory Patient Empowerment.' Patient Education and Counseling, Elsevier, 3 June 2013, www.sciencedirect.com/science/article/pii/S0738399113001821.",
        "Schwartz, Gail Garfield. 'Managing Dangerous Technology.' Science of The Total Environment, Elsevier, 7 July 2003, www.sciencedirect.com/science/article/abs/pii/0048969786901683.",
        "Turchin, Alexey. 'Assessing the Future Plausibility of Catastrophically Dangerous AI.' Futures, Pergamon, 1 Dec. 2018, www.sciencedirect.com/science/article/pii/S0016328718301319.",
    ];

    const citationList = document.getElementById('citation-list');

    mlaCitations.forEach((citation) => {
        const listItem = document.createElement('li');
        listItem.textContent = citation;
        citationList.appendChild(listItem);
    });

    const worksContent = document.getElementById('works-content');
    const seeMoreButton = document.getElementById('see-more-button');

    seeMoreButton.addEventListener('click', function () {
        if (worksContent.style.maxHeight) {
            worksContent.style.maxHeight = null;
            seeMoreButton.textContent = 'See more';
        } else {
            worksContent.style.maxHeight = worksContent.scrollHeight + 'px';
            seeMoreButton.textContent = 'See less';
        }
    });

    const images = document.getElementById('images');
    const imageURLs = [
        'https://cdn.elearningindustry.com/wp-content/uploads/2019/01/5-ways-ai-is-changing-the-education-industry-1-1024x574.jpg',
        'https://www.ncsc.gov.uk/images/social-icons.jpg',
        'https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/2023-06/Banner%20-%20How%20AI%20and%20ChatGPT%20in%20healthcare%20elevating%20the%20game%20%281%29.webp',
    ];

    imageURLs.forEach((imageURL) => {
        const image = document.createElement('img');
        image.src = imageURL;
        images.appendChild(image);
    })
});
