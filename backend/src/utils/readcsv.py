from pandas import read_csv  # IMPORTA O LEITOR DE BANCO DE DADOS

# LÊ OS DADOS de dados.csv
dados = read_csv("dados.csv", sep=";", encoding="latin1")

dose = []
confianca = []
campus = []
semestre = []
curso = []
matricula = []
nome = []
data = []
modelo = []
# each linha has the following structure: data;nome;matricula; curso; semestre; campus; confianca; dose;
for linha in dados.values:
    data.append(linha[0])
    nome.append(linha[1])
    matricula.append(linha[2])
    curso.append(linha[3])
    semestre.append(linha[4])
    campus.append(linha[5])
    confianca.append(linha[6])
    dose.append(linha[7])
    modelo.append(linha[8])

for i in range(len(modelo)):
    if modelo[i] == "Remoto":
        modelo[i] = "online"
        continue
    if modelo[i] == "Presencial":
        modelo[i] = "presencial"
        continue
    modelo[i] = "hibrido"


for i in range(len(confianca)):
    if confianca[i] == "Sim":
        confianca[i] = "sim"
        continue
    if confianca[i] == "Não":
        confianca[i] = "nao"
        continue
    if confianca[i] == "NÃ£o":
        confianca[i] = "nao"
        continue
    if confianca[i] == "Talvez":
        confianca[i] = "nao"
        continue


for i in range(len(dose)):
    if dose[i] == "Sim, de 1Âº dose":
        dose[i] = 1
        continue
    if dose[i] == "Sim, de vacina de dose Ãºnica":
        dose[i] = 1
        continue
    if dose[i] == "Sim, de 2Âº dose":
        dose[i] = 2
        continue
    if dose[i] == "Sim, de 3Âº dose":
        dose[i] = 3
        continue
    dose[i] = 0

for i in range(len(campus)):
    if campus[i] == "DARCY":
        continue
    if campus[i] == "FGA":
        continue
    if campus[i] == "FCE":
        campus[i] = "CC"
        continue
    print(campus[i])

readyToSubmitData = []

# append in the format: {"matricula": "890352127","curso": "Fonoaudiologia","semestre": "4","campus": "DARCY","confianca": "sim","vacinacao": "2","pior_modelo": "presencial"}
for i in range(len(data)):
    readyToSubmitData.append(
        {
            "matricula": matricula[i],
            "curso": curso[i],
            "semestre": semestre[i][0],
            "campus": campus[i],
            "confianca": confianca[i],
            "vacinacao": dose[i],
            "pior_modelo": modelo[i],
        }
    )

with open("../dadosdocsv.txt", "w") as f:
    f.write(str(readyToSubmitData))
