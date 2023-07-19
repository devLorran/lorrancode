import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiJqueryLogo,
    DiScrum,
    DiBootstrap,
    DiFirebase
} from 'react-icons/di'
import "./tecnologiacontainer.css"
const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 />, text: "Conhecimentos avançados com HTML5" },
    { id: "css", name: "CSS3", icon: <DiCss3 />, text: "Conhecimentos avançados com CSS3" },
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, text: "Conhecimentos avançados com JavaScript" },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall />, text: "Conhecimentos básicos com NodeJS" },
    { id: "mysql", name: "MySQL", icon: <DiMysql />, text: "Conhecimentos básicos com MySQL" },
    { id: "react", name: "React", icon: <DiReact />, text: "Conhecimentos básicos com ReactJS" },
    { id: "jquery", name: "Jquery", icon: <DiJqueryLogo />, text: "Conhecimentos básicos com JQuery" },
    { id: "scrum", name: "Scrum", icon: <DiScrum />, text: "Experiência com Metodologia Scrum" },
    { id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap />, text: "Experiência com Bootstrap" },
    { id: "firebase", name: "Firebase", icon: <DiFirebase />, text: "Conhecimentos com Firebase" },
];

const TechnologiesContainer = () => {
    return (
        <section id="tecnologia" className="technologies-container reveal">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
            {technologies.map((tech) => (
            <div className="technology-card" id={tech.id} key={tech.id}>
                {tech.icon}
                <div className="technology-info">
                <h3>{tech.name}</h3>
                <p>{tech.text}</p>
            </div>
            </div>
        ))}
        </div>
    </section>
    )
}

export default TechnologiesContainer

/**
 * (possible exports: DiAndroid, DiAngularSimple, DiAppcelerator, DiApple, DiAppstore, DiAptana, DiAsterisk, DiAtlassian, DiAtom, DiAws, DiBackbone, DiBingSmall, DiBintray, DiBitbucket, DiBlackberry, DiBootstrap, DiBower, DiBrackets, DiBugsense, DiCelluloid, DiChrome, DiCisco, 
DiClojure, DiClojureAlt, DiCloud9, DiCoda, DiCode, DiCodeBadge, DiCodeigniter, DiCodepen, DiCodrops, DiCoffeescript, DiCompass, DiComposer, DiCreativecommons, DiCreativecommonsBadge, DiCss3, DiCss3Full, DiCssTricks, DiCssdeck, DiDart, DiDatabase, DiDebian, DiDigitalOcean, DiDjango, DiDlang, DiDocker, DiDoctrine, DiDojo, DiDotnet, DiDreamweaver, DiDropbox, DiDrupal, DiEclipse, DiEmber, DiEnvato, DiErlang, DiExtjs, DiFirebase, DiFirefox, DiFsharp, DiGhost, DiGhostSmall, DiGit, DiGitBranch, DiGitCommit, DiGitCompare, DiGitMerge, DiGitPullRequest, DiGithub, DiGithubAlt, DiGithubBadge, DiGithubFull, DiGnu, DiGo, DiGoogleAnalytics, DiGoogleCloudPlatform, DiGoogleDrive, DiGrails, DiGroovy, DiGrunt, DiGulp, DiHackernews, DiHaskell, DiHeroku, DiHtml5, DiHtml53DEffects, DiHtml5Connectivity, DiHtml5DeviceAccess, DiHtml5Multimedia, DiIe, DiIllustrator, DiIntellij, DiIonic, DiJava, DiJavascript, DiJavascript1, DiJekyllSmall, DiJenkins, DiJira, DiJoomla, DiJqueryLogo, DiJqueryUiLogo, DiJsBadge, DiKomodo, DiKrakenjs, DiKrakenjsBadge, DiLaravel, DiLess, DiLinux, DiMagento, DiMailchimp, DiMarkdown, DiMaterializecss, DiMeteor, DiMeteorfull, DiMitlicence, DiModernizr, DiMongodb, DiMootools, DiMootoolsBadge, DiMozilla, DiMsqlServer, DiMysql, DiNancy, DiNetbeans, DiNetmagazine, DiNginx, DiNodejs, DiNodejsSmall, DiNpm, DiOnedrive, DiOpenshift, DiOpensource, DiOpera, DiPerl, DiPhonegap, DiPhotoshop, DiPhp, DiPostgresql, DiProlog, DiPython, DiRackspace, DiRaphael, DiRasberryPi, DiReact, DiRedhat, DiRedis, DiRequirejs, DiResponsive, DiRor, DiRuby, DiRubyRough, DiRust, DiSafari, DiSass, DiScala, DiScriptcs, DiScrum, DiSenchatouch, DiSizzlejs, DiSmashingMagazine, DiSnapSvg, DiSpark, DiSqllite, DiStackoverflow, DiStreamline, DiStylus, DiSublime, DiSwift, DiSymfony, DiSymfonyBadge, DiTechcrunch, DiTerminal, DiTerminalBadge, DiTravis, DiTrello, DiTypo3, DiUbuntu, DiUikit, DiUnitySmall, DiVim, DiVisualstudio, DiW3C, DiWebplatform, DiWindows, DiWordpress, DiYahoo, DiYahooSmall, DiYeoman, DiYii, DiZend)
 */