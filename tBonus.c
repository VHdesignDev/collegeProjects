#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <locale.h>

#define MAX 50

typedef struct {
    char modelo[50];
    char placa[20];
    int kmTotal;
    int kmRevisao;
    int emUso; // 1 = fora da garagem, 0 = na garagem
} Veiculo;

void limparBuffer() {
    int c;
    while ((c = getchar()) != '\n' && c != EOF);
}

void cadastrarVeiculo(Veiculo **frota, int *qtd) {
    *frota = realloc(*frota, (*qtd + 1) * sizeof(Veiculo));
    Veiculo *novo = &(*frota)[*qtd];

    printf("Modelo: ");
    fgets(novo->modelo, 50, stdin);
    novo->modelo[strcspn(novo->modelo, "\n")] = '\0'; // remove '\n'

    printf("Placa: ");
    fgets(novo->placa, 20, stdin);
    novo->placa[strcspn(novo->placa, "\n")] = '\0';

    printf("Quilometragem total: ");
    scanf("%d", &novo->kmTotal);

    printf("Quilometragem desde a última revisão: ");
    scanf("%d", &novo->kmRevisao);

    novo->emUso = 0;

    (*qtd)++;
    limparBuffer();
    printf("Veículo cadastrado com sucesso!\n");
}

void listarVeiculos(Veiculo *frota, int qtd) {
    if (qtd == 0) {
        printf("Nenhum veículo cadastrado.\n");
        return;
    }

    printf("\n=== Veículos ===\n");
    for (int i = 0; i < qtd; i++) {
        printf("Modelo: %s\n", frota[i].modelo);
        printf("Placa: %s\n", frota[i].placa);
        printf("KM Total: %d\n", frota[i].kmTotal);
        printf("KM desde revisão: %d\n", frota[i].kmRevisao);
        printf("Status: %s\n", frota[i].emUso ? "Fora da garagem" : "Na garagem");
        printf("-----------------------------\n");
    }
}

int main() {
    
    Veiculo *frota = NULL;
    int qtdVeiculos = 0;
    int opcao;

    do {
        printf("\n--- MENU ---\n");
        printf("1. Cadastrar veículo\n");
        printf("2. Registrar saída de veículo\n");
        printf("3. Registrar retorno de veículo\n");
        printf("4. Listar veículos\n");
        printf("5. Realizar revisão\n");
        printf("6. Sair\n");
        printf("Escolha uma opção: ");
        scanf("%d", &opcao);
        limparBuffer();

        switch (opcao) {
            case 1:
                cadastrarVeiculo(&frota, &qtdVeiculos);
                break;
            case 2:
                // registrarSaida(frota, qtdVeiculos);
                break;
            case 3:
                // registrarRetorno(frota, qtdVeiculos);
                break;
            case 4:
                listarVeiculos(frota, qtdVeiculos);
                break;
            case 5:
                // realizarRevisao(frota, qtdVeiculos);
                break;
            case 6:
                printf("Encerrando o programa.\n");
                break;
            default:
                printf("Opção inválida.\n");
        }

    } while (opcao != 6);

    free(frota);
    return 0;
}
