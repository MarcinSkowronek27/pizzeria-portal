# Dashboard

  - `/` DONE
    - statystyki dzisiejszych zamówień (zdalne i lokalne)
    - listę rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

- `/login` DONE
  - pola na login i hasło
  - guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików

- `/tables` DONE
  - wybór daty i godziny
  - tabela z listą rezerwacji oraz wydarzeń
    - każda kolumna = 1 stolik
    - każdy wiersz = 30 minut
    - ma przypominać widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni są różne stoliki
    - po kliknięciu rezerwacji lub eventu, przechodzimy na stronę szczegółów
- `/tables/booking/:id` DONE MS
  - zawiera wszystkie informacje dotyczące rezerwacji
  - umożliwia edycję i zapisanie zmian
- `/tables/booking/new` DONE
  - analogicznie do powyższej, bez początkowych informacji
- `/tables/events/:id` DONE MS
  - analogicznie do powyższej, dla eventów
- `/tables/events/new` DONE
  - analogicznie do powyższej, dla eventów, bez początkowych informacji

# Widok kelnera

- `/waiter` DONE
  - tabela
    - w wierszach stoliki
    - w kolumnach różne rodzaje informacji (status, czas od ostatniej aktywności)
    - w ostatniej kolumnie dostępne akcje dla danego stolika
- `/waiter/order/new` DONE MS
  - numer stolika (edytowalny)
  - menu produktów
  - opcje wybranego produktu
  - zamówienie (zamówione produkty z opcjami i ceną)
  - kwotę zamówienia
- `/waiter/order/:id` DONE MS
  - jak powyższa

# Widok kuchni

- `/kitchen` DONE
  - wyświetlać listę zamówień w kolejności ich złożenia
  - lista musi zawierać:
    - numer stolika (lub zamówienia zdalnego)
    - pełne informacje dotyczące zamówionych dań
  - na liście musi być możliwość oznaczenia zamówienia jako zrealizowane

