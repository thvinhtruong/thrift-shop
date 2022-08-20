package entity

type Product struct {
	ID          int64  `json:"id"`
	RetailerID  int64  `json:"retailer_id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Price       int64  `json:"price"`
	CreatedAt   int64  `json:"created_at"`
	UpdatedAt   int64  `json:"updated_at"`
	DealedAt    int64  `json:"dealed_at"`
}
