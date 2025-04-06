import React from 'react'
import {useState} from 'react'
import axios from 'axios'
// STYLE
import PolicyCard from './PolicyCard';
import styles from "./PoliciesList.module.css";

const PoliciesList = () => {
  const [summaries, setSummaries] = useState({});
  const [loadingSummaries, setLoadingSummaries] = useState({});

    const handleSummarize = async (key, text) =>{

        setLoadingSummaries(prev => ({...prev, [key]: true}));
        try{
            const response = await axios.post("http://127.0.0.1:5000/summarize", {
                text
            });
            setSummaries(prev =>({
                ...prev,
                [key]: response.data.summary,
            }));
        }catch(err){
            console.error("Error summarizing", err);
        }

        setLoadingSummaries(prev => ({...prev, [key]: false}))
    }

    const policies =[
        {
            key: 'democracy',
            title: "Democracy and Governance",
            text: `The Philippines operates under a democratic form of government where power is vested in the people and exercised through elected representatives. This structure ensures that government officials remain accountable to the public and that citizens retain control over the direction of national and local governance. The 1987 Constitution establishes a framework that upholds democratic principles and safeguards individual rights and freedoms.

                At the heart of this democracy is the separation of powers among the Executive, Legislative, and Judiciary branches. This system is designed to prevent the abuse of authority by providing checks and balances. Each branch functions independently while cooperating with the others to uphold the rule of law and implement policies that reflect the will of the people.

                Democracy in the Philippines encourages active civic engagement, such as participation in elections, public consultations, and civil society activities. Citizens are empowered to influence decision-making processes and hold public officials accountable through peaceful means. A vibrant media and access to information also play key roles in maintaining a transparent and responsive government.

                However, challenges remain in the full realization of democratic ideals. Issues such as political dynasties, disinformation, and lack of political education hinder meaningful participation. Continuous public education, reforms, and vigilance are necessary to strengthen democratic governance and protect the rights of every Filipino citizen.`,
            showSummarize: true,
        },
        {
            key: 'vote',
            title: "Right to Vote",
            text: `The right to vote is one of the most fundamental pillars of a democratic society. In the Philippines, this right is protected by Article V of the 1987 Constitution, which empowers every qualified Filipino citizen to participate in elections. Voting enables citizens to express their will and influence the policies and leadership that govern the country.

                National and local elections are regularly conducted to ensure representation at every level of government. These elections provide an opportunity for the people to choose leaders who align with their interests and aspirations. The act of voting is not just a right but also a civic duty that reinforces the legitimacy of elected officials and the democratic process as a whole.

                The Commission on Elections (COMELEC) is the constitutional body tasked with ensuring that elections are free, honest, and credible. It regulates campaign practices, maintains the registry of voters, and supervises the conduct of electoral procedures. COMELEC also works to enhance public trust in the voting process through education and technological innovation.

                Despite legal protections, various obstacles—such as vote-buying, political coercion, and disenfranchisement—continue to undermine the integrity of elections. Voter education, strict enforcement of laws, and citizen vigilance are essential to protecting the sanctity of the ballot and the strength of democratic institutions.`,
            showSummarize: true,
        },
        {
            key: 'qualification',
            title: "Qualification for Voters",
            text: `To ensure the integrity and orderliness of the electoral process, the Philippine Constitution and election laws outline specific qualifications for voters. These criteria are intended to guarantee that every voter possesses a reasonable level of maturity, residency, and identification with their local community, enabling them to make informed decisions at the polls.

                    A qualified voter must be a Filipino citizen, at least 18 years old on or before election day. Additionally, the voter must have been a resident of the Philippines for at least one year and a resident of the place where they intend to vote for at least six months immediately preceding the election. These requirements help establish a clear connection between the voter and their community.

                    Moreover, a person must be duly registered with the Commission on Elections (COMELEC) to be eligible to vote. Voter registration includes biometrics data collection and verification to prevent fraud and duplication. Registration periods and guidelines are announced prior to each election cycle to ensure broad participation.

                    It is the responsibility of every citizen to verify their eligibility, register on time, and understand the responsibilities that come with casting a vote. By fulfilling these qualifications, citizens uphold the legitimacy of the electoral process and contribute to the democratic life of the nation.`,
            showSummarize: true,
        },
        {
            key: 'elections',
            title: "Fair and Honest Elections",
            text: `Free, fair, and credible elections are essential to a functioning democracy. The Philippine Constitution mandates that elections must be conducted in a manner that reflects the true will of the people. Every vote must count equally, and every voter must be able to participate without fear or coercion.

                To uphold electoral integrity, the Philippines has enacted laws against vote-buying, electoral fraud, and other unethical practices. The Commission on Elections (COMELEC) is responsible for enforcing these laws and implementing policies that deter wrongdoing. Despite these efforts, challenges such as political manipulation, disinformation, and weak enforcement remain prevalent.

                In recent years, the adoption of the Automated Election System (AES) has significantly modernized the voting process. This technology is intended to increase transparency, minimize human error, and speed up the transmission of results. The AES is monitored by various watchdog organizations, ensuring accountability throughout the system.

                Ensuring fair and honest elections requires not only robust laws and technology, but also an informed and vigilant citizenry. Voters must be critical of the information they consume, report irregularities, and advocate for reform. The future of Philippine democracy depends on collective efforts to defend the integrity of the electoral process.`,
            showSummarize: true,
        },
        {
            key: 'participation',
            title: "People's Participation",
            text: `Active citizen participation is a cornerstone of democratic governance. In the Philippines, the Constitution encourages the involvement of individuals and communities in shaping public policy through mechanisms such as initiatives, referendums, recalls, and consultations. These tools empower citizens to contribute directly to nation-building beyond the electoral process.

                    Civil society organizations, non-governmental organizations (NGOs), and grassroots movements play vital roles in advocating for social justice, environmental sustainability, good governance, and human rights. These groups often serve as a bridge between marginalized sectors and policy-makers, amplifying the voices of those who might otherwise be left unheard.

                    The media and digital platforms also provide spaces for civic engagement, enabling citizens to hold officials accountable and participate in national discourse. Online petitions, public forums, and social media campaigns allow for the rapid dissemination of ideas and collective action. These platforms must, however, be used responsibly to avoid misinformation and abuse.

                    A healthy democracy requires more than periodic voting; it demands continuous engagement from an informed and motivated populace. Through education, activism, and community involvement, Filipino citizens can help build a transparent, inclusive, and responsive government that truly reflects the will of the people.`,
            showSummarize: true,
        },
    ];

    return (
        <div className="accordion" id="accordionExample">
      {policies.map(policy => (
        <PolicyCard
          key={policy.key}
          policy={policy}
          onSummarize={handleSummarize}
          summary={summaries[policy.key]}
          loading={loadingSummaries[policy.key]}
        />
      ))}
    </div>
    )
}
export default PoliciesList
