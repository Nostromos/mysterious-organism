// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
}
  
// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand;
}
  
const pAequorFactory = (uniqueNumber, dnaArray) => {
    return {
        specieNum: uniqueNumber,
        dna: dnaArray,
        mutate () {
            const randBaseNum = Math.floor(Math.random() * this.dna.length);
            let baseToMutate = this.dna[randBaseNum];
            while (baseToMutate === this.dna[randBaseNum]) {
                baseToMutate = returnRandBase();
            }
            this._dna[randBaseNum] = baseToMutate;
        },
        compareDNA (otherAeqObj) {
            let commonCount = 0;
            otherAeqObj.dna.forEach((base, i) => {
                if (base === this.dna[i]) {
                    commonCount++;
                }
            })
            const percentCommon = Math.trunc((commonCount / 15) * 100);
            console.log(`Specie ${this.specieNum} and Specie ${otherAeqObj.specieNum} have ${percentCommon}% DNA in common.`)
        }, 
        willLikelySurvive () {
            let baseCount = 0;
            this.dna.forEach(base => {
                if (base === 'C' || base === 'G') {
                    baseCount++;
                }
            })
            const basePercentage = baseCount / 15;
            //basePercentage > .6 ? console.log('survives') : console.log('dies');
            return basePercentage > .6 ? true : false;
        },
        complementStrand () {
            let complementaryStrand = [];
            this.dna.forEach(base => {
                switch (base) {
                    case 'A':
                        complementaryStrand.push('T');
                        break;
                    case 'T':
                        complementaryStrand.push('A');
                        break;
                    case 'C': 
                        complementaryStrand.push('G');
                        break;
                    case 'G':
                        complementaryStrand.push('C');
                        break;
                }
            })
            return complementaryStrand;
        }
    }
}

function createSurvivingSpecies (number) {
    let survivors = [];
    console.log('Creating survivors...');
    for (let i = 0; survivors.length < number; i++) {
        console.log(`Creating and testing survivor ${i}...`)
        let potentialSurvivor = pAequorFactory(i, mockUpStrand());
        if (potentialSurvivor.willLikelySurvive()) {
            survivors.push(potentialSurvivor);
            console.log(`Survivor ${i} survived.`)
        } else {
            console.log(`Survivor ${i} died.`)
        }
    }
    return survivors;
}