import Header from "./assets/components/Header";
import Section from "./assets/components/Section";

export default function App() {
  return <div className="app">
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
  </div>;
}