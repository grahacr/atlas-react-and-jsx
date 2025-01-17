import Header from "./components/Header";
import Section from "./components/Section";
import HelpfulResource from "./components/HelpfulResource";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

export default function App() {
  return (
  <div className="app">
    <Header />
    <Section title="What is react?">
      <p>React is a component-based library used with Javascript for the purpose of building User Interfaces. It follows the virtual DOM approach which facilitates effecient rendering performance</p>
    </Section>
    <Section title="Benefits of react">
      <ul>
        <li>Organized</li>
        <li>Scalable</li>
        <li>Reusable components</li>
        <li>Simple</li>
        <li>Fast, effecient rendering</li>
      </ul>
    </Section>
    <Section title="Helpful resources">
      <HelpfulResource link="https://www.youtube.com/watch?v=wIyHSOugGGw&list=WL&index=1" label="Every React component explained" />
      <HelpfulResource link="https://youtu.be/s2skans2dP4?si=tsBv-DELvU6AieCe" label="React JS explained in 10 minutes" />
      <HelpfulResource link="https://react.dev/learn" label="React quick start guide" />
    </Section>
    <AboutMe />
    <Footer />
  </div>
  );
}