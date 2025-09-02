import Container from "@/shared/ui/Container";
import HeaderLinks from "./HeaderLinks";
import Logo from "./components/Logo";
import LanguageSelector from "./LanguageSelector";
import TheMenu from "./TheMenu";

function Header() {
  return (
    <header>
      <Container>
        <div className="header-wrapper pt-6 flex items-center gap-2">
          <Logo />

          <HeaderLinks />

          <LanguageSelector />

          <TheMenu />
        </div>
      </Container>
    </header>
  );
}

export default Header;
