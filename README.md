## 1. Przygotowanie środowiska

- Upewnij się, że masz zainstalowanego Dockera.
- PowerShell uruchamiaj normalnie, dopiero jeśli chcesz startować lokalny serwis PostgreSQL w Windows, uruchom **jako Administrator**.

---

## 2. Tworzenie i uruchamianie kontenera PostgreSQL w Dockerze

### 2.1 Usuń stary kontener (jeśli istnieje)

```powershell
docker rm postgress
```

- Usuwa kontener o nazwie `postgress`, aby uniknąć konfliktu nazw.

### 2.2 Uruchom nowy kontener z PostgreSQL

```powershell
docker run --name postgress -e POSTGRES_PASSWORD=mysecretpassword -p 5431:5432 -d postgres
```

- `--name postgress` – nazwa kontenera.
- `-e POSTGRES_PASSWORD=mysecretpassword` – ustawia hasło dla użytkownika `postgres`.
- `-p 5431:5432` – mapuje port 5432 z kontenera na port 5431 lokalnego komputera.
- `-d` – uruchamia kontener w tle (detached mode).
- `postgres` – oficjalny obraz PostgreSQL z Docker Hub.

### 2.3 Sprawdzenie statusu kontenera

```powershell
docker ps
```

- Powinien pokazać kontener **Up**, czyli działający.

---

## 3. Łączenie się z bazą PostgreSQL w kontenerze

### 3.1 Wejście do kontenera

```powershell
docker exec -it postgress psql -U postgres
```

- `exec -it` – pozwala wejść do kontenera interaktywnie.
- `psql -U postgres` – loguje do PostgreSQL jako superuser `postgres`.

### 3.2 Przykładowe komendy w `psql`

```sql
\l          -- lista baz danych
\c nazwa    -- połączenie z bazą o nazwie 'nazwa'
\dt         -- lista tabel w aktualnej bazie
\q          -- wyjście z psql
```

---

## 4. Mapowanie portów i dostęp z zewnątrz

- Skonfigurowany port 5431 pozwala na łączenie się z bazą np. z pgAdmina:

```
Host: localhost
Port: 5431
User: postgres
Password: mysecretpassword
```

---

## 5. Dodatkowe przydatne komendy Docker

- Zatrzymanie kontenera:

```powershell
docker stop postgress
```

- Uruchomienie zatrzymanego kontenera:

```powershell
docker start postgress
```

- Usunięcie kontenera:

```powershell
docker rm postgress
```

- Sprawdzenie wszystkich kontenerów (aktywnych i zakończonych):

```powershell
docker ps -a
```

---

## 6. Uwagi

- Zmienna środowiskowa **POSTGRES_PASSWORD** musi być zawsze ustawiona przy pierwszym uruchomieniu kontenera z nową bazą.
- Jeśli chcesz mieć różne kontenery PostgreSQL, nadaj im różne nazwy (`--name`) i różne porty lokalne (`-p`).

```

```
