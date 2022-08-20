package entity

type Cart struct {
	ID         int64 `json:"id"`
	UserID     int64 `json:"user_id"`
	ProductID  int64 `json:"product_id"`
	RetailerID int64 `json:"retailer_id"`
	Quantity   int64 `json:"quantity"`
}
