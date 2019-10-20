

export interface Avatar {
    url?: any;
}

export interface Vehicle {
    id: number;
    price: string;
    plate: string;
}

export interface Estate {
    id: number;
    price: string;
}

export interface Document2 {
    url: string;
}

export interface Document {
    id: number;
    document_type: string;
    document: Document2;
    name: string;
}

export interface Project {
    id: number;
    initial_payment: string;
    approved_date: string;
    dream: string;
    description: string;
    money: number;
    warranty: string;
    monthly_payment: number;
    new_project: boolean;
    month: number;
    interest_rate: number;
    code: string;
    approved: boolean;
    finished: boolean;
    matched: boolean;
}

export interface Client {
    id: number;
    step: number;
    name: string;
    lastname: string;
    identification: string;
    phone: string;
    address: string;
    birthday: string;
    email: string;
    city: string;
    rent: boolean;
    rent_payment: string;
    people: string;
    education: string;
    marital_status: string;
    code_confirmation: boolean;
    rent_tax: boolean;
    rating: number;
    employment_status: string;
    avatar: Avatar;
    max_capacity?: any;
    patrimony?: any;
    current_debt?: any;
    income?: any;
    payment_capacity?: any;
    job_position?: any;
    interest_level: number;
    client_type: string;
    career: string;
    technical_career: string;
    household_type: string;
    market_expenses: string;
    transport_expenses: string;
    public_service_expenses: string;
    bank_obligations: string;
    real_estate: boolean;
    payments_in_arrears: boolean;
    payments_in_arrears_value: string;
    payments_in_arrears_time: string;
    recommended_interest: string;
    created_at: string;
    global: number;
    vehicles: Vehicle[];
    estates: Estate[];
    documents: Document[];
    projects: Project[];
    cons: any[];
    pros: any[];
}

export interface Meta {
    current_page: number;
    next_page: number;
    prev_page?: any;
    total_pages: number;
    total_count: number;
}

export interface RootObject {
    clients: Client[];
    meta: Meta;
}
