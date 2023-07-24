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
        }
    }
}
  
let specie1 = pAequorFactory(1, mockUpStrand());
let specie2 = pAequorFactory(2, mockUpStrand());

specie2.compareDNA(specie1);
  