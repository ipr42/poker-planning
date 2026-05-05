use async_graphql::SimpleObject;
use uuid::Uuid;

use crate::types::{Card, EntityId};

#[derive(Clone, Debug, SimpleObject)]
pub struct Deck {
    pub id: EntityId,
    pub cards: Vec<Card>,
}

impl Deck {
    pub fn new() -> Self {
        Deck {
            id: Uuid::new_v4(),
            cards: vec![
                "XS".to_string(),
                "S".to_string(),
                "M".to_string(),
                "L".to_string(),
                "XL".to_string(),
            ],
        }
    }
}
