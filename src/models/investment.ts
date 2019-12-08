
export class Investment {

    titreoperation: string
    entreprise: string
    annee_de_livraison: Number
    ville: string
    mandataire: string
    ppi: string
    lycee: string
    notification_du_marche: Date
    codeuai: string
    longitude: Number
    etat_d_avancement: string
    montant_des_ap_votes_en_meu: Number
    cao_attribution: Date
    latitude: Number
    maitrise_d_oeuvre: string
    mode_de_devolution: string
    annee_d_individualisation: Number
    enveloppe_prev_en_meu: Number

    constructor(data) {
        if(data.titreoperation) this.titreoperation = data.titreoperation
        if(data.entreprise) this.entreprise = data.entreprise
        if(data.annee_de_livraison) this.annee_de_livraison = Number(data.annee_de_livraison)
        if(data.ville) this.ville = data.ville
        if(data.mandataire) this.mandataire = data.mandataire
        if(data.ppi) this.ppi = data.ppi
        if(data.lycee) this.lycee = data.lycee
        if(data.notification_du_marche) this.notification_du_marche = data.notification_du_marche
        if(data.codeuai) this.codeuai = data.codeuai
        if(data.longitude) this.longitude = Number(data.longitude)
        if(data.etat_d_avancement) this.etat_d_avancement = data.etat_d_avancement
        if(data.montant_des_ap_votes_en_meu) this.montant_des_ap_votes_en_meu = Number(data.montant_des_ap_votes_en_meu)
        if(data.cao_attribution) this.cao_attribution = data.cao_attribution
        if(data.latitude) this.latitude = Number(data.latitude)
        if(data.maitrise_d_oeuvre) this.maitrise_d_oeuvre = data.maitrise_d_oeuvre
        if(data.mode_de_devolution) this.mode_de_devolution = data.mode_de_devolution
        if(data.annee_d_individualisation) this.annee_d_individualisation = Number(data.annee_d_individualisation)
        if(data.enveloppe_prev_en_meu) this.enveloppe_prev_en_meu = Number(data.enveloppe_prev_en_meu)
    }
}
