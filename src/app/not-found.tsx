import Container from "@/shared/ui/Container";

export default function NotFound() {
  return (
    <div className="not-found-wrapper">
      <Container>
        <div className="wrapper flex flex-col items-center justify-center gap-6 md:gap-8 text-center h-[calc(100vh-176px)]">
          <div className="error-status text-8xl text-theprimary">404</div>

          <div className="error-desc text-4xl text-theprimary uppercase">
            Страница не найдена
          </div>

          <div className="text-gray-400 max-w-[30rem]">
            Возможно, ссылка устарела или введена неверно. Попробуйте вернуться
            на главную страницу или воспользуйтесь навигацией.
          </div>
        </div>
      </Container>
    </div>
  );
}
