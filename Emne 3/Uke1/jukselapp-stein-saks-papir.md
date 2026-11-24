# Jukselapp: Stein, saks, papir (emne 3, uke 1)

Bare tall, tekst, `if` og metoder. Ingen enum og ingen validering.

## Byggerekkefølge

1. `GenerateRandomNumber` – spør hvorfor det står `Next(1, 4)` og ikke `Next(1, 3)`. Den øvre grensen er ikke med.
2. `NumberToChoice` – samme metode brukes for både datamaskinen og brukeren.
3. Les input med `Console.ReadLine()` og gjør det om til tall med `int.Parse`.
4. `FindWinner` – start med uavgjort, la studentene finne de tre tilfellene der brukeren vinner. Alt annet betyr at datamaskinen vant.

## Kode

```csharp
namespace RockPaperScissors;

class Program
{
    static void Main(string[] args)
    {
        int cpuNumber = GenerateRandomNumber();
        string cpuChoice = NumberToChoice(cpuNumber);

        Console.WriteLine("Enter your choice: ");
        Console.WriteLine("1. Rock, 2. Paper, 3. Scissors ");
        string input = Console.ReadLine();
        int userNumber = int.Parse(input);
        string userChoice = NumberToChoice(userNumber);

        Console.WriteLine("You chose " + userChoice);
        Console.WriteLine("The computer chose " + cpuChoice);
        Console.WriteLine(FindWinner(userChoice, cpuChoice));
    }

    private static int GenerateRandomNumber()
    {
        var random = new Random();
        int randomNumber = random.Next(1, 4);
        return randomNumber;
    }

    private static string NumberToChoice(int number)
    {
        if (number == 1)
        {
            return "Rock";
        }
        if (number == 2)
        {
            return "Paper";
        }
        return "Scissors";
    }

    private static string FindWinner(string user, string cpu)
    {
        if (user == cpu)
        {
            return "Draw!";
        }
        if (user == "Rock" && cpu == "Scissors")
        {
            return "You win!";
        }
        if (user == "Paper" && cpu == "Rock")
        {
            return "You win!";
        }
        if (user == "Scissors" && cpu == "Paper")
        {
            return "You win!";
        }
        return "The computer wins!";
    }
}
```

## Vær forberedt på

- **Gul strek under `Console.ReadLine()`:** Rider varsler om at den kan returnere `null`. Det er en advarsel, ikke en feil, og programmet kjører.
- **Ingen validering:** `hei` krasjer `int.Parse`, og `7` blir «Scissors». Godt spørsmål til slutt: «Hva skjer hvis jeg skriver 7?»
