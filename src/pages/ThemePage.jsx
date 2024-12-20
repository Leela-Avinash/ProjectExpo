import React from "react";
import { useParams } from "react-router-dom";
import SmartEducation from "../assets/SmartEducation.jpg";
import SustainableFuture from "../assets/SustainableFuture .jpg";
import HealthAgriculture from "../assets/HealthAgriculture.jpg";
import IOT from "../assets/IOT.jpg";
import CyberSecurity from "../assets/CyberSecurity.jpg"
// Sample array of themes
const themes = [
    {
        link: "SmartEducationandAutomation",
        name: "Smart Education and Automation",
        image: SmartEducation,
        about: "The Smart Education and Automation theme explores how automation can transform educational systems, making learning more accessible, efficient, and personalized. It encourages participants to create solutions that leverage AI, IoT, and data analytics to streamline administrative tasks, adapt curricula to individual needs, and foster engaging learning experiences. This theme highlights the potential for technology to reshape classrooms and online learning environments, creating intelligent systems that support both educators and students, and ultimately enhance the quality and reach of education.",
        goal: "The goal of Smart Education and Automation is to empower educators and students through technology-driven tools that simplify processes and enhance learning outcomes. By integrating automation, this theme aims to address key challenges in education, such as accessibility, adaptability, and resource optimization. Participants are encouraged to design solutions that not only ease administrative burdens but also promote personalized learning experiences and provide data-driven insights to improve teaching methods, ensuring a more effective, inclusive, and innovative educational ecosystem.",
    },
    {
        link: "SustainableFutureThroughIntegratedTechnologies",
        name: "Sustainable Future through Integrated Technologies",
        image: SustainableFuture,
        about: 'The theme, Sustainable Future through Integrated Technologies, explores the potential of technology to drive sustainability in various sectors. By focusing on integration, it encourages innovative solutions that blend cutting-edge technologies to address environmental and social challenges. Participants will work on projects aimed at optimizing resources, reducing waste, and minimizing environmental impact, all while enhancing quality of life. This theme promotes collaboration across disciplines, inspiring solutions that leverage IoT, AI, and renewable energy sources to build a sustainable, tech-driven future.',
        goal: "Participants are expected to present solutions that seamlessly integrate technology with sustainability principles. Judges will evaluate the extent to which the solutions address challenges related to transportation efficiency, energy innovation, and pollution reduction. Successful submissions will showcase a deep understanding of the interplay between technology and environmental responsibility. The solutions should offer practical, scalable ways to contribute to a more sustainable world.",
    },
    {
        link: "HealthAgricultureandRuralDevelopment",
        name: "Health Agriculture and Rural Development",
        image: HealthAgriculture,
        about: "The Health, Agriculture, and Rural Development theme focuses on the potential of technology to drive positive change in essential areas that directly impact quality of life in rural communities. Participants are encouraged to create solutions that address healthcare accessibility, sustainable agricultural practices, and infrastructure for rural development. By integrating digital health, smart farming, and community-oriented technologies, this theme aims to foster resilience, economic growth, and improved well-being in rural areas, bridging gaps and promoting sustainable progress.",
        goal: "The goal of Health, Agriculture, and Rural Development is to empower rural communities through innovative, tech-driven solutions that enhance healthcare, improve agricultural productivity, and strengthen local infrastructure. Participants are tasked with designing applications that provide affordable healthcare, increase crop yields, and support sustainable practices, ultimately contributing to the social and economic development of rural regions. This theme seeks to create lasting impact by building solutions that are accessible, sustainable, and tailored to the unique needs of rural populations.",
    },
    {
        link: "CyberSecurity",
        name: "Cyber Security",
        image: CyberSecurity,
        about: "Cybersecurity is the practice of protecting digital systems, networks, and data from unauthorized access, attacks, and damage. With rapid advancements in technology, cybersecurity has become essential for individuals, businesses, and governments to safeguard sensitive information. Cybersecurity encompasses a wide range of strategies, including encryption, threat detection, and incident response, all aimed at maintaining data integrity and privacy. By addressing risks like hacking, phishing, and malware, cybersecurity helps create a safer digital environment, enabling secure online interactions and fostering trust in digital platforms.",
        goal: "The primary goal of cybersecurity is to ensure the confidentiality, integrity, and availability of information across digital platforms. By protecting systems from cyber threats, cybersecurity aims to prevent unauthorized access, data breaches, and financial losses. This field focuses on proactively identifying and mitigating vulnerabilities, minimizing risks to individuals and organizations. Effective cybersecurity measures help maintain operational continuity, protect sensitive information, and support resilience against ever-evolving cyber threats, ultimately creating a secure and trustworthy digital landscape for everyone."
    }
];

const ThemePage = () => {
    const { theme } = useParams();

    // Find the theme that matches the theme parameter
    const selectedTheme = themes.find((t) => t.link === theme);

    return (
        <div className="container mx-auto p-6 md:w-[85%] my-5">
            {selectedTheme ? (
                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold pb-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-700">
                        {selectedTheme.name}
                    </h1>
                    <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
                        <img
                            src={`${selectedTheme.image}`}
                            alt={selectedTheme.name}
                            className="w-full md:w-1/2 rounded-lg shadow-lg"
                        />
                        <div className="text-left md:w-2/3">
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-muted-foreground mb-2">
                                About
                            </h2>
                            <p className="text-gray-600 dark:text-muted-foreground mb-4 lg:text-lg text-md">
                                {selectedTheme.about}
                            </p>
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold dark:to-blue-500 text-gray-900 dark:text-muted-foreground mb-2">
                                Goal
                            </h2>
                            <p className="text-gray-600 dark:text-muted-foreground mb-4 lg:text-lg text-md">
                                {selectedTheme.goal}
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                <p className="text-center text-gray-600">Theme not found.</p>
            )}
        </div>
    );
};

export default ThemePage;
